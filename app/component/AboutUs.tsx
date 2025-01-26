'use client';
import React, { useEffect } from 'react';
import '../styles/aboutus.css';
import Image from 'next/image';
import CD from '../assets/cd.webp'
import DT from '../assets/DT.jpg'
import CL from '../assets/CL.jpg'
import CreativeDesign from '../assets/creativeDesign.gif'
import DigitalTransformation from '../assets/digital-transformation.gif'
import Solution from '../assets/solution.gif'
import AOS from 'aos';

const AboutUs: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-us" id="about">
      <div className="about-us-content" data-aos="fade-down">
        {/* Heading */}
        <h2 className="about-us-title">About Us</h2>

        {/* Mission */}
        <p className="about-us-text">
          We specialize in creating modern websites that stand out for their functionality and aesthetic appeal.
          Our goal is to bring businesses into the digital world by offering innovative and effective solutions.
        </p>

        {/* Values with Cards */}
        <div className="card-container">
          <div className="card" data-aos="fade-up">
            <Image src={CD} alt="Creative Design" className="card-image" />
            <h3 className="card-title">Creative Design</h3>
            <div className='flex justify-center'>
            <Image 
              src={CreativeDesign}
              alt='Crative Design'
              width={80} 
              height={80} 
              unoptimized = {false}
            />
            </div>

            <p className="card-description">We create unique and visually appealing designs that capture attention.</p>
          </div>

          <div className="card" data-aos="fade-up">
            <Image src={DT} alt="Digital Transformation" className="card-image" />
            <h3 className="card-title">Digital Transformation</h3>
            <div className='flex justify-center'>

            <Image 
              src={DigitalTransformation}
              alt='DigitalTransformation'
              width={80} 
              height={80} 
              unoptimized = {false}
            />
            </div>
            <p className="card-description">Helping businesses transition to the digital age with innovative solutions.</p>
          </div>

          <div className="card" data-aos="fade-up">
            <Image src={CL} alt="Customer-Centric Solutions" className="card-image" />
            <h3 className="card-title">Customer-Centric Solutions</h3>
            <div className='flex justify-center'>

            <Image 
              src={Solution}
              alt='Solution'
              width={80} 
              height={80} 
              unoptimized = {false}
            />
            </div>
            <p className="card-description">Tailored solutions that prioritize the needs and satisfaction of our customers.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="about-us-cta">
          <button className="cta-button">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
