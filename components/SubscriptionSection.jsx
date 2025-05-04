const SubscriptionSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
          Subscribe to Our Newsletter
        </h2>
        <div className="max-w-lg mx-auto">
          <p className="text-center text-gray-600 mb-8">
            Stay up to date with the latest news and updates. Subscribe to our
            newsletter now!
          </p>
          <form className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full md:w-72 px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-500 transition-all duration-300 transform hover:scale-105"
              required
            />
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 transform hover:scale-105"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SubscriptionSection;
