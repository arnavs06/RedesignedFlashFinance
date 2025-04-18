import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; 
import { Link as RouterLink } from 'react-router-dom'; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo"><img src="/HeaderIcon.png"></img> </div>

      <div className="nav-container">
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <ul>
            <li>
              <ScrollLink to="features" smooth={true} duration={500} onClick={toggleMenu}>
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="pricing" smooth={true} duration={500} onClick={toggleMenu}>
                Pricing
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="testimonials" smooth={true} duration={500} onClick={toggleMenu}>
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>

        <RouterLink to="/login" className="cta-link">
          <button className="cta-button">Get Started</button>
        </RouterLink>

        <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;