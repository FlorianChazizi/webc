"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/hero.css';
import Image from 'next/image';
import Cloud from '../assets/responsive.png';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="hero">
      <div className="hero-text">
        <h2 data-aos="fade-down">Κατασκευή μοντέρνας ιστοσελίδας</h2>
        <p data-aos="fade-right">Προσαρμοσμένες λύσεις για κάθε ανάγκη.</p>
        <button data-aos="fade-up">Ξεκινήστε τώρα</button>

      </div>

      <div className="hero-image" data-aos="fade-right">
        <Image 
        src={Cloud}
        alt="Ψηφιοποίηση Επιχειρήσεων"
        className='img'
        />
      </div>
    </div>
  );
};

export default Hero;
