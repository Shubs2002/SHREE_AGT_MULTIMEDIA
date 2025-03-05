import React from 'react';
import '../Styles/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h2>Welcome to Our Landing Page</h2>
        <p>Your success starts here.</p>
        <button className="hero-btn">Get Started</button>
      </div>
    </section>
  );
};

export default Hero;
