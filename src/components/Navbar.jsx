import React, { useState } from 'react';

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Sujal</div>

      <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <a href="#hero" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞' : '🌙'}
        </button>
      </div>

      <div className="hamburger" onClick={handleToggle}>
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
