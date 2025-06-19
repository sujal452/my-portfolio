import React, { useEffect, useState } from 'react';
import '../styles/loader.css';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loader">Loading Portfolio...</div>;
  }

  return null;
};

export default Loader;
