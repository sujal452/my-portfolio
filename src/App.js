import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './styles/global.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/skills.css';
import './styles/projects.css';
import './styles/contact.css';
import './styles/footer.css';
import './styles/loader.css'; // Loader styles

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // AOS init
    AOS.init({ duration: 1000, once: true });

    // Simulate loading screen for 2 seconds
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={darkMode ? 'dark' : ''}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
