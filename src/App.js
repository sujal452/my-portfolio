import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


import './styles/global.css';
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
import UpcomingProjects from './components/UpcomingProjects'; // ✅ make sure this is imported
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

<ScrollToTop />



function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <UpcomingProjects /> {/* ✅ Add this line to use the imported component */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
