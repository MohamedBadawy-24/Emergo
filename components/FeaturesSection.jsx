import {
  LightningBoltIcon,
  CheckCircleIcon,
  ScaleIcon,
} from "@heroicons/react/outline"; // Import icons from Heroicons

const FeaturesSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Key Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-blue-700 text-white p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2">
            <LightningBoltIcon className="h-16 w-16 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 tracking-wide text-center">
              Automated Analysis
            </h3>
            <p className="text-center text-lg">
              Our system automates the analysis of chest X-ray images, reducing manual workload and speeding up diagnosis.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-green-700 text-white p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2">
            <CheckCircleIcon className="h-16 w-16 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 tracking-wide text-center">
              Improved Efficiency
            </h3>
            <p className="text-center text-lg">
              Enhance the efficiency and accuracy of pneumonia detection using deep learning models tailored to clinical needs.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="flex flex-col items-center bg-gradient-to-r from-purple-500 to-purple-700 text-white p-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:translate-y-2">
            <ScaleIcon className="h-16 w-16 mb-4" />
            <h3 className="text-2xl font-semibold mb-4 tracking-wide text-center">
              Scalability
            </h3>
            <p className="text-center text-lg">
              The system is designed to scale, offering adaptability for various clinical environments, ensuring broad usability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
