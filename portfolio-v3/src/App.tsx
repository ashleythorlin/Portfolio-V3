import {default as React, useState} from 'react';
import './App.css';
import './colorScheme.css'
// import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import AnimNavBar from "./components/navbar/AnimNavBar"
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Contact from "./pages/contact/Contact";
import Footer from "./components/footer/Footer";
import { ActiveNav } from "./types";

function App() {
  const [activeNav, setActiveNav] = useState<ActiveNav>(
    {
      id: "homeNav", 
      index: 0
    })
  const bgColorsBody = [
    getComputedStyle(document.documentElement).getPropertyValue('--scheme1'), 
    getComputedStyle(document.documentElement).getPropertyValue('--scheme2'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme3'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme4'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme5'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme6')
  ];
    

  return (
    <div className='app' >
        <NavBar 
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        colorWay={bgColorsBody}
        />
        <Home />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;