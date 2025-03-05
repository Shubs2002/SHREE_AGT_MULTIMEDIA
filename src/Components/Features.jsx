import React, { useState } from 'react';
import '../Styles/Features.css';
import { FaRocket, FaShieldAlt, FaBolt } from 'react-icons/fa';

const featuresData = [
  {
    name: "Fast Performance",
    description: "Experience blazing-fast speeds with our optimized architecture.",
    icon: <FaRocket />,
  },
  {
    name: "Secure & Reliable",
    description: "We ensure top-notch security and reliability for all users.",
    icon: <FaShieldAlt />,
  },
  {
    name: "Lightning Integration",
    description: "Easily integrate with your favorite tools and services.",
    icon: <FaBolt />,
  },
];

const Features = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);

  return (
    <section id="features" className="features">
      <h2>Our Features</h2>
      <div className="feature-cards">
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className="feature-card"
            onMouseEnter={() => setHoveredFeature(index)}
            onMouseLeave={() => setHoveredFeature(null)}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.name}</h3>
            <p className={hoveredFeature === index ? "feature-description show" : "feature-description"}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
