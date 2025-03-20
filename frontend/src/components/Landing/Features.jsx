import React from 'react';
import { motion } from 'framer-motion';

const Features = () => {
  const features = [
    {
      icon: "📊",
      title: "The gold standard of Finance Education",
      description: "Learn everything you need with our all in 1 product, ensuring you to be ready for your interviews.",
    },
    {
      icon: "🤖",
      title: "AI Integration",
      description: "Use Artificial Intelligence to bring a whole new level of learning",
    },
    {
      icon: "🖥️",
      title: "User-Friendly Interface",
      description: "Easy-to-use tools designed for both beginners and experts.",
    },
  ];

  return (
    <section className="features" id="features">
      <h2>Why Flash Finance?</h2>
      <div className="feature-list">
        {features.map((feature, index) => (
          <motion.div
            className="feature-item"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Features;