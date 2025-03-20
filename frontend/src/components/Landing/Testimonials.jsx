import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: Arnav (Developer),
      author: "Hi, I'm Arnav, the lead developer behind Flash Finance.",
    },
    {
      quote: "Dennis",
      author: "To be done",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>About Us</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial, index) => (
          <motion.div
            className="testimonial-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <p>"{testimonial.quote}"</p>
            <p className="author">- {testimonial.author}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;