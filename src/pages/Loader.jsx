import React, { useState, useEffect } from 'react';
import RiseLoader from "react-spinners/RiseLoader";
import App from '../App';

const Loader = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  // Define the override variable for custom styles
  const override = `
    display: block;
    margin: 0 auto;
    border-color: red;
  `;

  return (
    <>
      {loading ? (
        <RiseLoader
          color='#36d7b7'
          loading={loading}
          cssOverride={override}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <App />
      )}
    </>
  );
};

export default Loader;
