'use client';
import React, { useEffect } from 'react';
import '../styles/service.css';
import AOS from 'aos';
import WD from '../assets/web-developer.gif';
import Image from 'next/image';
import DESIGN from '../assets/digital-creative.gif'
import SEO from '../assets/seo.gif'
import SHOPPING from '../assets/shopping.gif'
import PROMOTION from '../assets/promotion.gif'

const Services: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const services = [
    {
      title: 'Web Development',
      description: 'Building scalable and robust websites tailored to your needs.',
      icon: WD, // You can replace this with an SVG or image if needed
    },
    {
      title: 'Web Design',
      description: 'Crafting visually stunning and user-friendly designs.',
      icon: DESIGN,
    },
    {
      title: 'SEO',
      description: 'Boosting to the top!',
      icon: SEO,
    },
    {
      title: 'Eshop',
      description: 'Developing seamless and efficient e-commerce platforms.',
      icon: SHOPPING,
    },
    {
      title: 'Digital Marketing',
      description: 'Helping you reach your audience with effective strategies.',
      icon: PROMOTION,
    },
  ];

  return (
    <section className="services" id="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card shadow-lg" data-aos="fade-up">
            <div
              className="service-icon flex items-center justify-center" 
              data-aos="fade-down"
            >
              <Image
                className="object-contain"
                src={service.icon}
                alt={service.title}
                width={80} // Set desired width
                height={80} // Set desired height
                unoptimized = {false}
              />
            </div>
            <h3 className="service-title" data-aos="fade-down">
              {service.title}
            </h3>
            <p className="service-description" data-aos="fade-down">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
