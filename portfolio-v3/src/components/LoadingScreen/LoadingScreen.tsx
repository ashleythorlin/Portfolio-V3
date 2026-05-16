import React from 'react';
import './loading.css';

function LoadingScreen() {
  return (
    <div className="loading-screen">
      <p className="loading-name">ashley thorlin</p>
      <div className="loading-bar-track">
        <div className="loading-bar-fill" />
      </div>
    </div>
  );
}

export default LoadingScreen;
