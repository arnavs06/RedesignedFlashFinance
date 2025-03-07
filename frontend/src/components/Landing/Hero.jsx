import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Learn in a flash.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Break in, one step at a time
        </motion.p>
        <div className="hero-buttons">
          <Link to="pricing" smooth={true} duration={500}>
            <button className="cta-button primary">Try It Free</button>
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <button className="cta-button secondary">Learn More</button>
          </Link>
        </div>
      </div>
      <div className="hero-image">
       {/*} <img src="/Flash_Finance_Logo.png" alt="Flash Finance" /> */}
      </div>
    </section>
  );
};

export default Hero;