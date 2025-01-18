'use client';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import ContactUs from './component/ContactUs';

export default function Home() {
  return (
    <div >
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
}
