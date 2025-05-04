const AboutUsPage = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center">
      <div className="container mx-auto px-6 py-16 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500">
          About Us
        </h1>

        {/* Profile Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">

          {/* Profile Card 1: Dr. Ramadan Fawzy Babers */}
          <div className="flex flex-col items-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
            <img
              src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
              alt="Dr. Ramadan Fawzy Babers"
              className="w-40 h-40 rounded-full border-4 border-white mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Dr. Ramadan Fawzy Babers</h2>
            <p className="text-lg font-light mb-4">Project Supervisor</p>
          </div>

          {/* Profile Card 2: Dr. Ibrahim Mohamed El-Hasnony */}
          <div className="flex flex-col items-center bg-gradient-to-r from-teal-500 to-green-400 rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90">
            <img
              src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
              alt="Dr. Ibrahim Mohamed El-Hasnony"
              className="w-40 h-40 rounded-full border-4 border-indigo-600 mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Dr. Ibrahim Mohamed El-Hasnony</h2>
            <p className="text-lg font-light mb-4">Project Supervisor</p>
          </div>

          {/* Profile Card 3: Mohamed Ahmed Mohamed (Centered) */}
          <div className="flex flex-col items-center bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-xl p-8 transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:opacity-90 md:col-span-2 lg:col-span-1">
            <img
              src="https://th.bing.com/th/id/OIP.x7X2oAehk5M9IvGwO_K0PgHaHa?rs=1&pid=ImgDetMain"
              alt="Mohamed Ahmed Mohamed"
              className="w-40 h-40 rounded-full border-4 border-white mb-4"
            />
            <h2 className="text-2xl font-semibold mb-2">Mohamed Ahmed Mohamed</h2>
            <p className="text-lg font-light mb-4">Project Lead</p>
          </div>

        </div>

        {/* About Us Text Section */}
        <div className="max-w-3xl mx-auto mb-12">
          <p className="text-lg text-gray-200 leading-relaxed">
            At Emergo, we are committed to revolutionizing healthcare with cutting-edge AI technology. Our team of experts combines machine learning and deep learning techniques to analyze chest X-rays for pneumonia detection, making diagnoses faster and more accessible, especially in underserved areas. By leveraging AI, we aim to improve healthcare outcomes with reliable diagnostic tools.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;
