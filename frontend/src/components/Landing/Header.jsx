import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll'; // Alias for react-scroll Link
import { Link as RouterLink } from 'react-router-dom'; // Alias for react-router-dom Link

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      {/* Logo on the left */}
      <div className="logo">FlashFinance</div>

      {/* Navigation links and CTA button on the right */}
      <div className="nav-container">
        {/* Navigation Links */}
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
                Testimonials
              </ScrollLink>
            </li>
            <li>
              <ScrollLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>
                Contact
              </ScrollLink>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <RouterLink to="/signin" className="cta-link">
          <button className="cta-button">Get Started</button>
        </RouterLink>

        {/* Hamburger Icon for Mobile */}
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