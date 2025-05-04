const DataPreparationSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Data Preparation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Step 1 */}
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 text-white">
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Comprehensive Dataset
            </h3>
            <p className="text-lg text-center">
              A comprehensive dataset of chest X-ray images meticulously labeled by medical experts.
            </p>
          </div>
          {/* Step 2 */}
          <div className="bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 text-white">
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Data Cleaning
            </h3>
            <p className="text-lg text-center">
              Preprocessing steps such as noise removal, image resizing, and normalization.
            </p>
          </div>
          {/* Step 3 */}
          <div className="bg-gradient-to-r from-purple-400 to-purple-600 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 text-white">
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Data Augmentation
            </h3>
            <p className="text-lg text-center">
              Applying transformations like rotation, flipping, and scaling to increase dataset diversity.
            </p>
          </div>
          {/* Step 4 */}
          <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 text-white">
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Train-Test Split
            </h3>
            <p className="text-lg text-center">
              Dividing the dataset into training and testing sets for model evaluation.
            </p>
          </div>
          {/* Step 5 */}
          <div className="bg-gradient-to-r from-red-400 to-red-600 rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2 text-white">
            <h3 className="text-2xl font-semibold mb-3 text-center">
              Data Normalization
            </h3>
            <p className="text-lg text-center">
              Scaling pixel values to a range suitable for neural network training.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataPreparationSection;
