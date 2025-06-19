import React from 'react';
import '../styles/contact.css'; // Make sure this is imported

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Get In Touch</h2>
        <p className="contact-description">
          Feel free to reach out for collaborations, questions, or just to say hello 👋
        </p>
        <div className="contact-details">
          <p>
            📧 Email: <a href="mailto:30sujaldhiman@gmail.com">30sujaldhiman@gmail.com</a>
          </p>
          <p>
            💻 GitHub: <a href="https://github.com/sujal452" target="_blank" rel="noreferrer">github.com/sujaldhiman</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
