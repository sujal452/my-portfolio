import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../styles/scrollToTop.css';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.scrollY > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    <button
      className={`scroll-to-top ${visible ? 'show' : ''}`}
      onClick={scrollToTop}
      aria-label="Scroll to Top"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
