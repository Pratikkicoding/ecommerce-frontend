import React from "react";
import { Mail } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-[#A86B00]">
              Dynique Bharat
            </h2>

            <p className="mt-3 text-gray-300 font-medium">
              Desi. Modern. Unstoppable.
            </p>

            <p className="mt-2 text-gray-400 text-sm">
              The Future Speaks देसी. The Fit Speaks Dynique.
            </p>

            <p className="mt-4 text-gray-500 text-sm">
              One Bharat. Many Stories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#A86B00]">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-white">
                  Home
                </a>
              </li>

              <li>
  <Link to="/about" className="hover:text-white">
    About Us
  </Link>
</li>

              <li>
                <a href="#" className="hover:text-white">
                  Shop
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Women Collection
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Kids Collection
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#A86B00]">
              Connect With Us
            </h3>

            <div className="space-y-3">

              <a
                href="https://instagram.com/dyniquebharat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-[#A86B00] transition"
              >
                <FaInstagram
                  size={22}
                  className="text-pink-500"
                />
                <span>@dyniquebharat</span>
              </a>

              <a
                href="mailto:dyniquebharat@gmail.com"
                className="flex items-center gap-3 hover:text-[#A86B00] transition"
              >
                <Mail size={20} />
                <span>dyniquebharat@gmail.com</span>
              </a>

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            © 2026 Dynique Bharat LLP. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;