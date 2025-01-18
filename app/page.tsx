'use client';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import ContactUs from './component/ContactUs';
import Head from 'next/head';
export default function Home() {
  <Head>

        <link rel="canonical" href="https://www.webc.gr" />
      </Head>
  return (
    <div >
      <Hero />
      <AboutUs />
      <Services />
      <ContactUs />
    </div>
  );
}
