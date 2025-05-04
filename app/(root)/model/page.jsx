"use client";

import React, { useState, useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import { useClerk } from "@clerk/clerk-react";

const PneumoniaClassifier = () => {
  const [model, setModel] = useState(null);
  const [status, setStatus] = useState("");
  const [predictionResult, setPredictionResult] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef(null);
  const { user } = useClerk();

  useEffect(() => {
    const loadModel = async () => {
      setStatus("⏳ Loading AI model...");
      try {
        const loadedModel = await tf.loadLayersModel("/model/model.json");
        setModel(loadedModel);
        setStatus("✅ AI model loaded. Ready for predictions.");
      } catch (error) {
        setStatus(`❌ Error loading model: ${error.message}`);
      }
    };

    loadModel();
  }, []);

  const predict = async () => {
    if (isProcessing) return; // Prevent multiple predictions while one is in progress
    if (!model) {
      alert("⚠️ AI model is still loading. Please wait.");
      return;
    }

    const file = fileInputRef.current?.files[0];
    if (!file) {
      alert("⚠️ Please select an image file first.");
      return;
    }

    setIsProcessing(true); // Indicate processing has started
    setStatus("⏳ Processing image...");

    const reader = new FileReader();
    reader.onloadstart = () => setStatus("⏳ Reading image...");

    reader.onload = async (e) => {
      const img = new Image();
      img.onload = async () => {
        const tensor = preprocessImage(img);
        await makePrediction(tensor);
        tensor.dispose(); // Prevent memory leak
      };
      img.src = e.target.result;
    };

    reader.onerror = () => {
      setStatus("❌ Error reading the image.");
      setIsProcessing(false); // Reset processing state
    };
    reader.readAsDataURL(file);
  };

  const preprocessImage = (img) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 224;
    canvas.height = 224;
    ctx.drawImage(img, 0, 0, 224, 224);
    const imageData = ctx.getImageData(0, 0, 224, 224);
    const data = imageData.data;

    const grayData = new Uint8Array(224 * 224);
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      grayData[i / 4] = avg;
    }

    const tensor = tf.tensor3d(grayData, [224, 224, 1]);
    return tensor.expandDims(0).div(255.0);
  };

  const makePrediction = async (tensor) => {
    setStatus("🔍 Making prediction...");
    try {
      const prediction = await model.predict(tensor).data();
      const result = formatPrediction(prediction);
      setPredictionResult(result);
      setStatus("✅ Prediction completed.");
      await savePredictionResult(result);
    } catch (error) {
      setStatus(`❌ Error during prediction: ${error.message}`);
    } finally {
      setIsProcessing(false); // Reset processing state once done
    }
  };

  const formatPrediction = (prediction) => {
    const [normal, pneumonia] = prediction;
    return normal > pneumonia ? "NORMAL" : "PNEUMONIA";
  };

  const savePredictionResult = async (formattedPrediction) => {
    try {
      const response = await fetch("/api/savePredictionResult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prediction: formattedPrediction,
          timestamp: new Date().toISOString(),
          user: user?.id,
          userName: user?.fullName,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to save prediction result");
      }

      console.log("Prediction result saved successfully.");
    } catch (error) {
      console.error("❌ Save error:", error);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-8">
      <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center justify-center">
        <h1 className="text-4xl font-extrabold text-center text-indigo-600 mb-6">AI Pneumonia Detection</h1>
        <p className="text-lg text-center text-gray-700 mb-6">
          Upload a valid <strong>chest X-ray image</strong>. Non-X-ray images may lead to uncertain or incorrect predictions.
        </p>
        
        <input
          type="file"
          ref={fileInputRef}
          accept="image/*"
          className="mb-6 p-4 border-2 border-gray-300 rounded-lg w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition ease-in-out duration-200"
          disabled={isProcessing}
        />

        <button
          onClick={predict}
          className="bg-gradient-to-r from-indigo-500 to-blue-600 hover:from-indigo-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-lg shadow-md transform hover:scale-105 transition-all duration-200"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <div className="animate-spin h-5 w-5 border-4 border-t-transparent border-white rounded-full"></div>
          ) : (
            "Start Prediction"
          )}
        </button>

        <div className="text-xl font-medium text-gray-800 mt-6">{status}</div>

        {!model && (
          <p className="text-orange-500 text-center font-semibold mt-4">⚠️ AI model is still loading...</p>
        )}

        {predictionResult && (
          <div className="mt-8 text-xl text-center font-semibold text-green-600">
            <p>🩺 <strong>Result:</strong> {predictionResult}</p>
            <p className="text-lg text-gray-700 mt-2">✅ The team will contact you regarding this result.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PneumoniaClassifier;
