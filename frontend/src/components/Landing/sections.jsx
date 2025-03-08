import React from 'react';

const Sections = () => {
  return (
    <div className="section-container">
      <div className="section" id="features">
        <h2>Features</h2>
        <p>Get real-time insights into your financial data with our advanced analytics tools.</p>
      </div>

      <div className="section" id="pricing">
        <h2>Pricing</h2>
        <p>Affordable plans tailored to meet your financial needs.</p>
      </div>

      <div className="section" id="testimonials">
        <h2>Testimonials</h2>
        <p>Hear what our users have to say about AI Finance Prep.</p>
      </div>

      <div className="section" id="contact">
        <h2>Contact</h2>
        <p>Reach out to us for any inquiries or support.</p>
      </div>
    </div>
  );
};

export default Sections;