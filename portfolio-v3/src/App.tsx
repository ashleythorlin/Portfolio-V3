import {default as React, useState} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
// import AnimNavBar from "./components/navbar/AnimNavBar"
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/home/Home";
import Education from "./pages/education/Education";
import Skills from "./pages/skills/Skills";
import Experience from "./pages/experience/Experience";
import Projects from "./pages/projects/Projects";
import Resume from "./pages/resume/Resume";
import Footer from "./components/footer/Footer";
import { ActiveNav } from "./types";

function App() {
  const [activeNav, setActiveNav] = useState<ActiveNav>(
    {
      id: "homeNav", 
      index: 0
    })

  return (
    <div className='app'>
      <BrowserRouter>
        <NavBar 
        activeNav={activeNav}
        setActiveNav={setActiveNav}
        />
        <Routes>
          <Route path={"/"}
            element={<Navigate replace to='/portfolio' />}
          />
          <Route path={"/portfolio"}
            element={<Home />}
          />
          <Route path={"/portfolio/education"}
            element={<Education />}
          />
          <Route path="/portfolio/skills" 
            element={<Skills />}
          />
          <Route path="/portfolio/experience" 
            element={<Experience />}
          />
          <Route path="/portfolio/projects" 
            element={<Projects />}
          />
          <Route path="/portfolio/resume" 
            element={<Resume />}
          />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;