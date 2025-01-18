"use client";

import React from 'react';
import '../styles/contactus.css';

const ContactUs: React.FC = () => {
  return (
    <section className="contact-us" id='contact'>
      <h2 className="contact-us-title">Contact Us</h2>
      <p className="contact-us-text">
        Have questions or want to get in touch? Reach out to us!
      </p>
      <div className="contact-info">
        <div className="contact-item">
          <span className="contact-icon">📧</span>
          <a href="mailto:info@example.com" className="contact-link">info@webc.gr</a>
        </div>
        <div className="contact-item">
          <span className="contact-icon">📞</span>
          <a href="tel:+123456789" className="contact-link">+30 694463180</a>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
