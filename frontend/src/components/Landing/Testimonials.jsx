import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Hi, I'm Arnav, the lead developer behind Flash Finance. knowing the struggle of not being a Finance/Acounting Major, I had sought out to create a product which I would personally use and learn from, and hope to leverage this application in my own recruitment process. If anyone has any questions or anything, feel free to contact us!",
      author: "Arnav, Co-Founder / Lead Developer",
    },
    {
      quote: "We founded Flash Finance to be by students for students! I personally plan on using Flash Finance to help me review for investment banking interviews and  I hope it helps others too. If you guys have any suggestions please contact us.",
      author: "Dennis, Co-Founder, Head of Product Development",
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