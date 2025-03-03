import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "app is fire dennis and arnav are goated",
      author: "real user",
    },
    {
      quote: "got hired at goldman stanley cuz of this",
      author: "other real user",
    },
  ];

  return (
    <section className="testimonials" id="testimonials">
      <h2>What Our Students Say</h2>
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