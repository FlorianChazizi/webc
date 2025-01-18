import React from 'react';
import '../styles/services.css';

const Services: React.FC = () => {
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
          <div key={index} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
