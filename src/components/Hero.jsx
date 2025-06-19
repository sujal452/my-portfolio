import React from 'react';
import profile from '../assets/sujal.jpg';

const Hero = () => {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-container">
        <div className="hero-text" data-aos="fade-right" data-aos-duration="1000">
          <h1>Hi, I'm <span>Sujal Dhiman</span></h1>
          <p>
            A passionate <strong>Frontend Developer</strong> crafting modern, responsive websites
            with clean UI & great UX.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">🚀 View Projects</a>
            <a href="/SujalDhiman_Resume.pdf" download className="btn">📄 Download Resume</a>
          </div>
        </div>

        <div className="hero-img" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="300">
          <img src={profile} alt="Sujal Dhiman" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
