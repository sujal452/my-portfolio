import React from 'react';
import sujalImg from '../assets/sujal.jpg';
import '../styles/hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content" data-aos="fade-right">
        <h1>Hi, I'm <span className="highlight">Sujal </span></h1>
        <p>
          A passionate <strong>Frontend Developer</strong> crafting modern, responsive websites with clean UI & great UX.
        </p>
        <a href="#projects" className="btn">🚀 View Projects</a>
      </div>

      <div className="hero-image" data-aos="fade-left">
        <img src={sujalImg} alt="Sujal Dhiman" />
      </div>
    </section>
  );
};

export default Hero;
