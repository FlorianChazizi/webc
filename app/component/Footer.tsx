"use client";
import React from 'react';
import '../styles/footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="/about" className="footer-link">About Us</a>
          <a href="/services" className="footer-link">Services</a>
          <a href="/contact" className="footer-link">Contact</a>
        </div>
        <div className="footer-socials">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>🌐 Facebook</span>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>🐦 Twitter</span>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link">
            <span>📸 Instagram</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Webc. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
