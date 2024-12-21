import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">About Shopify</h2>
            <p className="text-gray-400">
              Shopify is your trusted online marketplace, offering a wide range of products at unbeatable prices. 
              Experience hassle-free shopping with secure payments and fast delivery.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <a href="/about-us" className="text-gray-400 hover:text-white transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-gray-400 hover:text-white transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="text-gray-400 hover:text-white transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400">Phone:</span> +1 234 567 890
              </li>
              <li>
                <span className="text-gray-400">Email:</span>{" "}
                <a href="mailto:support@shopify.com" className="text-blue-400 hover:underline">
                  support@shopify.com
                </a>
              </li>
              <li>
                <span className="text-gray-400">Address:</span> 123 Shopify Street, E-commerce City, EC 10101
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Shopify. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
