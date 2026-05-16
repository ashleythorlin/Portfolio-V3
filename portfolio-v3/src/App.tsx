import React from 'react';
import './App.css';
import './colorScheme.css';
import GradientBackground from './scene/GradientBackground';
import NavBar from './components/navbar/NavBar';
import ScrollLayout from './ScrollLayout';

function App() {
  return (
    <>
      <GradientBackground />
      <ScrollLayout />
      <NavBar />
    </>
  );
}

export default App;
