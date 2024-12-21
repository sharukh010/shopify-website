import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="text-blue-500 font-semibold">Shopify</span>, your one-stop destination for all your shopping needs. 
            We are dedicated to providing you with the best online shopping experience by offering high-quality products, unbeatable deals, 
            and exceptional customer service.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mission Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Mission</h2>
            <p className="text-gray-600">
              At Shopify, our mission is to make shopping easy, accessible, and enjoyable for everyone. 
              We strive to connect customers with the products they love and trust.
            </p>
          </div>

          {/* Vision Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Vision</h2>
            <p className="text-gray-600">
              We aim to revolutionize the online shopping experience by blending cutting-edge technology 
              with personalized services that cater to your unique preferences.
            </p>
          </div>

          {/* Values Section */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Our Values</h2>
            <p className="text-gray-600">
              Integrity, customer-centricity, innovation, and excellence are at the heart of everything 
              we do. We are committed to delivering value and building trust with our customers.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">Why Choose Shopify?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From the latest trends to everyday essentials, Shopify offers a diverse range of products tailored to your needs. 
            With secure transactions, fast delivery, and 24/7 support, your satisfaction is our top priority.
          </p>
        </div>

        <div className="mt-12">
          <div className="bg-blue-500 text-white rounded-lg p-6">
            <h2 className="text-2xl font-bold text-center">Start Your Shopping Journey with Us!</h2>
            <p className="text-center mt-4">
              Discover the joy of seamless shopping at <span className="font-semibold">Shopify</span>. 
              Let’s make every purchase memorable.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
