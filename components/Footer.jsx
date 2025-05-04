import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-800 via-purple-700 to-indigo-800 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold text-white mb-4">
              Emergo
            </h3>
            <p className="text-lg text-gray-200">
              Emergo is an innovative application that uses machine learning and AI to analyze chest X-rays for signs of pneumonia.
            </p>
          </div>
        </div>

        <div className="mt-8 border-t-2 border-gray-600 pt-6 text-center md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Emergo. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-start mt-4 space-x-6">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-white transition duration-300">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-white transition duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
