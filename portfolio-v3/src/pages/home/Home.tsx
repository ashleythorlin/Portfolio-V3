import React from 'react';
import '../pages.css';
import './home.css';
import homeData from '../../data/home.json';

function Home() {
  return (
    <div className="category">
      <div className="container" id="home-container">
        <div className="content page-assets" />
        <div className="content" id="home-content">
          <div className="section" id="welcome">
            <h1>{homeData.name}</h1>
            <h2>{homeData.title}</h2>
          </div>
        </div>
      </div>
      <div className="container" id="about-me-container">
        <div className="content page-assets" />
        <div className="content">
          <div className="section" id="about-me">
            <h1>about me</h1>
            <p>{homeData.about}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
