"use client";

import React, { useEffect, useState } from "react";

const PredictionList = () => {
  const [predictions, setPredictions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPredictions = async () => {
      try {
        const response = await fetch("/api/getResults");
        if (!response.ok) {
          throw new Error("Failed to fetch prediction results");
        }
        const data = await response.json();
        setPredictions(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching prediction results:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPredictions();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg font-medium text-gray-700 animate-pulse">
          Loading predictions...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg font-medium text-red-500 animate-pulse">
          Error: {error}
        </div>
      </div>
    );
  }

  if (!predictions || predictions.length === 0) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-lg font-medium text-gray-600">
          No predictions available.
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {predictions.map((prediction) => (
          <div
            key={prediction.id || prediction.userName}
            className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-500 ease-in-out"
          >
            <div className="flex flex-col justify-between h-full">
              <p className="text-2xl font-semibold text-indigo-800 mb-3">
                Prediction for <span className="text-indigo-600">{prediction.userName}</span>
              </p>
              <div className="flex-grow">
                <p className="text-lg text-gray-700 mb-2">
                  <strong className="text-indigo-600">Prediction:</strong> {prediction.prediction}
                </p>
                <p className="text-lg text-gray-700">
                  <strong className="text-indigo-600">Timestamp:</strong>{" "}
                  {new Date(prediction.timestamp).toLocaleString()}
                </p>
              </div>
              <div className="text-sm text-gray-500 mt-4">
                <p className="italic">Review the results and take necessary actions.</p>
              </div>
            </div>
          </div>
        ))}
      </div>
  );
};

export default PredictionList;
