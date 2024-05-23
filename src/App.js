import React, { useState, useEffect } from 'react';
import Preloader from './components/Preloader.js';
import Landing from './components/Landing.js';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time with a timeout
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 5000 ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      {isLoading ? <Preloader /> : <Landing />}
    </div>
  );
}

export default App;