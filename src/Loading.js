import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';


const LoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <h1>Loading...</h1>
      </div>
    );
  } 
  else {
    return <div>
        
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
        
        
        </div>;
  }
};

export default LoadingScreen;