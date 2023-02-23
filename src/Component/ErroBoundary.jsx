import React, { useState, useEffect } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      // log the error to an error reporting service
      console.log(error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);

    return () => {
      window.removeEventListener('error', handleError);
    };
  }, []);

  if (hasError) {
    // display a custom error message to the user
    return <h1 style={{justifyContent:"center",alignItems:"center",display:"flex",textAlign:"center",height:"98vh"}}>Something went wrong.<br/>Reload the page</h1>;
  }

  return children;
}

export default ErrorBoundary;