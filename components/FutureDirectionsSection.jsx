const FutureDirectionsSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Future Directions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Direction 1 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 tracking-wide">
              Incorporating Additional Data Sources
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Expanding the dataset with diverse chest X-ray images to improve the model's generalization capabilities and enhance its diagnostic accuracy.
            </p>
          </div>
          {/* Direction 2 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 tracking-wide">
              Exploring Advanced Deep Learning Techniques
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Investigating the use of advanced techniques, such as transfer learning and ensemble methods, to significantly boost the model's performance and adaptability.
            </p>
          </div>
          {/* Direction 3 */}
          <div className="bg-white rounded-lg shadow-xl p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:translate-y-2">
            <h3 className="text-2xl font-semibold mb-4 text-blue-600 tracking-wide">
              Integration with Electronic Health Records (EHRs)
            </h3>
            <p className="text-gray-800 leading-relaxed">
              Integrating the system with EHRs to provide seamless access to patient data, enabling faster diagnoses and more informed clinical decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureDirectionsSection;
