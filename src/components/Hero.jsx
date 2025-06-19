import React from 'react';
import profile from '../assets/sujal.jpg'; // your profile image

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text">
          <h1>Hi, I'm <span>Sujal Dhiman</span></h1>
          <p>
            A passionate <strong>Frontend Developer</strong> crafting modern, responsive websites
            with clean UI & great UX.
          </p>
          <a href="#projects" className="btn">🚀 View Projects</a>
        </div>
        <div className="hero-img">
          <img src={profile} alt="Sujal Dhiman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
