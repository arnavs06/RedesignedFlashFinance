import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="hero-title">
            Flash Finance <img src="/HeaderIcon.png" alt="Flash Finance Icon" />
          </div>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Learn in a Flash.
        </motion.p>
        <div className="hero-buttons">
          <RouterLink to="/login">
            <button className="cta-button">Try it for free</button>
          </RouterLink>
          <Link to="features" smooth={true} duration={500}>
            <button className="cta-button secondary">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;