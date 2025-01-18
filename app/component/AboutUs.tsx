import React from 'react';
import '../styles/aboutus.css';
import Image from 'next/image';
import Bulb from '../assets/We-removebg-preview.png'
const AboutUs: React.FC = () => {
  return (
    <section className="about-us">
      <div className="about-us-content">
        {/* Heading */}
        <h2 className="about-us-title">About Us</h2>
        
        {/* Mission */}
        <p className="about-us-text">
          We specialize in creating modern websites that stand out for their functionality and aesthetic appeal. 
          Our goal is to bring businesses into the digital world by offering innovative and effective solutions.
        </p>

        {/* Values */}
        <ul className="about-us-values">
          <li>✔ Creative Design</li>
          <li>✔ Digital Transformation</li>
          <li>✔ Customer-Centric Solutions</li>
        </ul>

        {/* Call to Action */}
        <div className="about-us-cta">
          <button className="cta-button">Learn More</button>
        </div>
      </div>

      {/* Image or Visual */}
      <div className="about-us-image">
        <Image 
         src={Bulb}
         alt='Η Εταιρία μας'
         className='img'
        />
      </div>
    </section>
  );
};

export default AboutUs;
