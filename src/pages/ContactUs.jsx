import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need help? We’re here to assist you. Reach out to us, and our team will get back to you as soon as possible!
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Message</label>
                <textarea
                  placeholder="Write your message"
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h2>
            <p className="text-gray-600 mb-4">
              You can also reach us via the following methods:
            </p>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-4">
                  <i className="fas fa-phone-alt"></i>
                </span>
                <span className="text-gray-700 font-medium">+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-4">
                  <i className="fas fa-envelope"></i>
                </span>
                <span className="text-gray-700 font-medium">support@shopify.com</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-500 text-2xl mr-4">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span className="text-gray-700 font-medium">
                  123 Shopify Street, E-commerce City, EC 10101
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
