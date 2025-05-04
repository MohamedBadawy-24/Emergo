import Link from "next/link";

const Emergo = () => {
  return (
    <div className="relative h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex flex-col justify-center items-center text-center">
      <div className="container mx-auto px-4 py-12 text-white">
        <h1 className="text-5xl font-extrabold mb-6">
          Automated Pneumonia Detection
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Empowering healthcare with deep AI learning. Feel the future. Now!
        </p>
        <Link href="/model">
          <button className="bg-white text-blue-500 font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105">
            Wanna Try?
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Emergo;
