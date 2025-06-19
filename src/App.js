import React, { useState } from 'react';
import './styles/global.css';
import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';


import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      {/* Toggle button moved inside Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
