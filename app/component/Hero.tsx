"use client";
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import '../styles/hero.css';

const Hero: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="hero">
      <div className="container text-center hero-content">
        <h2
          className="text-3xl md:text-6xl font-bold mb-4"
          data-aos="fade-down"
        >
         Σύντομα κοντά σας
        </h2>
        {/* <button
          className="hero-button "
          data-aos="zoom-in"
          onClick={() => document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Βρες το Πακέτο σου
        </button> */}
      </div>
    </section>
  );
};

export default Hero;
