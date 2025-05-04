const ContactsSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-12">
          Contact Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Address Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 hover:shadow-10xl transition-transform duration-300">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Address</h3>
            <p className="text-lg text-gray-600 mb-2">123 Street Name</p>
            <p className="text-lg text-gray-600 mb-2">City, State, ZIP Code</p>
            <p className="text-lg text-gray-600">Country</p>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:scale-105 hover:shadow-10xl transition-transform duration-300">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Your Full Name"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Your Email Address"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-700 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-3 px-8 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsSection;
