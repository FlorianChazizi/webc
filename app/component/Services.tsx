'use client';
import React, { useEffect } from 'react';
import '../styles/service.css';
import AOS from 'aos';

const Services: React.FC = () => {
    useEffect(() => {
      AOS.init({ duration: 1000 });
    }, []);
  
  const services = [
    {
      title: 'Web Development',
      description: 'Building scalable and robust websites tailored to your needs.',
      icon: '🖥️', // You can replace this with an SVG or image if needed
    },
    {
      title: 'Web Design',
      description: 'Crafting visually stunning and user-friendly designs.',
      icon: '🎨',
    },
    {
      title: 'Eshop',
      description: 'Developing seamless and efficient e-commerce platforms.',
      icon: '🛒',
    },
    {
      title: 'Digital Marketing',
      description: 'Helping you reach your audience with effective strategies.',
      icon: '📈',
    },
  ];

  return (
    <section className="services" id='services'>
      <h2 className="services-title">Our Services</h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card"  data-aos="fade-up">
            <div className="service-icon" data-aos="fade-down">{service.icon}</div>
            <h3 className="service-title" data-aos="fade-down">{service.title}</h3>
            <p className="service-description" data-aos="fade-down">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
