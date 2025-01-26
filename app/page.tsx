'use client';
import Hero from './component/Hero';
import AboutUs from './component/AboutUs';
import Services from './component/Services';
import ContactUs from './component/ContactUs';
import WebsiteCards from './component/WebsiteCards';
// import ContactWithMail from './component/ContactWithMail';
import Head from 'next/head';
export default function Home() {
  <Head>
        <title>Web Development Services | My Website</title>
        <meta
          name="Web Agency"
          content="We provide modern web development, design, and digital marketing solutions to help businesses grow."
        />
        <link rel="canonical" href="https://www.webc.gr" />
      </Head>
  return (
    <div >
      <Hero />
      <AboutUs />
      <Services />
      <WebsiteCards />
      <ContactUs />
      {/* <ContactWithMail /> */}
    </div>
  );
}
