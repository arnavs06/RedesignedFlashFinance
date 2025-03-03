import React from 'react';
import Header from '../components/Landing/Header'; // Corrected import path
import Hero from '../components/Landing/Hero'; // Corrected import path
import Features from '../components/Landing/Features'; // Corrected import path
import Pricing from '../components/Landing/Pricing'; // Corrected import path
import Testimonials from '../components/Landing/Testimonials'; // Corrected import path
import Contact from '../components/Landing/Contact'; // Corrected import path
import Footer from '../components/Landing/Footer'; // Corrected import path
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