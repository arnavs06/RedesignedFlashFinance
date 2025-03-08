import React from 'react';
import Header from '../components/Landing/Header';  
import Hero from '../components/Landing/Hero';
import Features from '../components/Landing/Features';
import Pricing from '../components/Landing/Pricing';
import Testimonials from '../components/Landing/Testimonials';
import Contact from '../components/Landing/Contact';
import Footer from '../components/Landing/Footer';
import '../styles/App.css';

function Landing() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default Landing;