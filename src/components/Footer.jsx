import React from 'react';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} <strong>Sujal Dhiman</strong>. All rights reserved.</p>
        <div className="footer-links">
          <a href="https://github.com/sujaldhiman" target="_blank" rel="noreferrer">GitHub</a>
          <a href="mailto:sujaldhiman.dev@gmail.com">Email</a>
          <a href="#top">Back to Top ↑</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
