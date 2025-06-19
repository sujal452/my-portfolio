import React from 'react';
import '../styles/loader.css';

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="loader-text">Loading Portfolio...</div>
      <div className="loader-bar"></div>
    </div>
  );
};

export default Loader;
