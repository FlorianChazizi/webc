"use client";
import React from 'react';
import '../styles/foot.css';
import { FaInstagram, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Column 1 */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-sm">
              We specialize in delivering modern websites and solutions tailored to your needs. Let’s bring your vision to life!
            </p>
          </div>
          {/* Column 2 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#about" className="hover:underline">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:underline">Services</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h3 className="text-xl font-bold mb-4">Socials</h3>
            <div className="flex space-x-5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 social-media-icon"
                aria-label="Facebook"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 social-media-icon"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-700  social-media-icon"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 pt-6 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Webc. All rights reserved.
          </p>
          <p className="text-sm mt-2">
            Designed by <a href="https://www.webc.gr" target="_blank" className="hover:underline">webc.gr</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
