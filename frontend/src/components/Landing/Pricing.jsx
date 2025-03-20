import React from 'react';
import { motion } from 'framer-motion';

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "Free",
      features: ["Flashcards", "Multiple Choice Questions"],
      recommended: false,
    },
    {
      name: "Pro",
      price: "$40",
      features: ["Flashcards", "Multiple Choice Questions","AI Powered Learning", "Access Forever"],
      recommended: true,
    },
  ];

  return (
    <section className="pricing" id="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-plans">
        {plans.map((plan, index) => (
          <motion.div
            className={`plan ${plan.recommended ? "recommended" : ""}`}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {plan.recommended && <div className="recommended-badge">Best Value</div>}
            <h3>{plan.name}</h3>
            <p className="price">{plan.price}</p>
            <ul>
              {plan.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <button className="cta-button">Choose Plan</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;