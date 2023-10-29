import {default as React, useState, useEffect} from 'react';
import './App.css';
import './colorScheme.css'
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
  // state for nav bar
  const [activeNav, setActiveNav] = useState<ActiveNav>(
    {
      id: "homeNav", 
      index: 0
    })
  // pull color scheme from colorScheme.css
  const bgColorsBody = [
    getComputedStyle(document.documentElement).getPropertyValue('--scheme1'), 
    getComputedStyle(document.documentElement).getPropertyValue('--scheme2'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme3'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme4'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme5'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme6'),
    getComputedStyle(document.documentElement).getPropertyValue('--scheme7')
  ];

  //-----BACKGROUND ANIMATION ON SCROLL-----
  // state for background color
  const [scrollColor, setScrollColor] = useState<string>(bgColorsBody[0])
  //
  const handleScroll = () => {
      const position = window.scrollY;
      let contentHeight = document?.getElementById('home-content')?.clientHeight
      let containerHeight = document?.getElementById('home-container')?.clientHeight
      
      if(containerHeight != undefined && contentHeight != undefined){
        if (position < contentHeight){
            setActiveNav({id: "homeNav", index: 0})
            setScrollColor(bgColorsBody[0])
        } else if (position < contentHeight + containerHeight){
          setActiveNav({id: "aboutNav", index: 1})
          setScrollColor(bgColorsBody[1])
        } else if (position < contentHeight + (containerHeight * 2)){
          setActiveNav({id: "experienceNav", index: 2})
          setScrollColor(bgColorsBody[2])
        } else if (position < contentHeight + (containerHeight * 3)){
          setActiveNav({id: "skillsNav", index: 3})
          setScrollColor(bgColorsBody[3])
        } else if (position < contentHeight + (containerHeight * 4)){
          setActiveNav({id: "projectsNav", index: 4})
          setScrollColor(bgColorsBody[4])
        } else if (position < contentHeight + (containerHeight * 5)){
          setActiveNav({id: "educationNav", index: 5})
          setScrollColor(bgColorsBody[5])
        } else {
          setActiveNav({id: "contactNav", index: 6})
          setScrollColor(bgColorsBody[6])
        }
      }
  };

  useEffect(() => {
      window.addEventListener('scroll', handleScroll, false);

      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);


  return (
    <div className='app'
      style={{
        backgroundColor: scrollColor
      }}
      >
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