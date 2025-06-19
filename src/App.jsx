function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light' : '🌙 Dark'}
      </button>

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />    {/* ✅ ADD THIS */}
      <Contact />     {/* ✅ ADD THIS */}
      <Footer />
    </div>
  );
}
