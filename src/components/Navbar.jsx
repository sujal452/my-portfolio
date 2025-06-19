import React from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <div className="logo">Sujal</div>

      <div className="nav-links">
        <a href="#hero">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>

        {/* 🔥 Toggle button inside Navbar */}
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
