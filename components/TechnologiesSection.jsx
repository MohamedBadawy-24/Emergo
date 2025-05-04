const TechnologiesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Technologies Used
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Technology 1 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-600">
              Python 3.9
            </h3>
            <p className="text-lg text-center text-gray-700">
              A powerful programming language used for building machine learning models and backend development.
            </p>
          </div>
          {/* Technology 2 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-600">
              TensorFlow 2.7
            </h3>
            <p className="text-lg text-center text-gray-700">
              An open-source machine learning framework for building and training deep learning models.
            </p>
          </div>
          {/* Technology 3 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-600">
              OpenCV 4.5.5
            </h3>
            <p className="text-lg text-center text-gray-700">
              An open-source computer vision library used for image and video processing tasks.
            </p>
          </div>
          {/* Technology 4 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-600">
              Pandas 1.3.5
            </h3>
            <p className="text-lg text-center text-gray-700">
              A Python library used for data manipulation and analysis, particularly for structured data.
            </p>
          </div>
          {/* Technology 5 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-600">
              Matplotlib 3.6.2
            </h3>
            <p className="text-lg text-center text-gray-700">
              A Python plotting library used for creating static, animated, and interactive visualizations.
            </p>
          </div>
          {/* Technology 6 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-3 text-center text-blue-600">
              Seaborn 0.11.2
            </h3>
            <p className="text-lg text-center text-gray-700">
              A Python data visualization library based on Matplotlib, used for statistical graphics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
