'use client';
import React from "react";
import '../styles/hero.css';

const Hero = () => {

  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">WebCraft Agency</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact Us</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1>Your Business, Our Expertise</h1>
          <p>We design and build stunning websites that elevate your business to new heights.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Previous Projects Section */}
      <section id="projects" className="projects-section">
        <h2>Our Previous Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <h3>Project 1</h3>
            <p>A sleek e-commerce website for a fashion brand.</p>
          </div>
          <div className="project-card">
            <h3>Project 2</h3>
            <p>A modern portfolio site for a professional photographer.</p>
          </div>
          <div className="project-card">
            <h3>Project 3</h3>
            <p>A dynamic booking platform for a travel agency.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 WebCraft Agency. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Hero;
