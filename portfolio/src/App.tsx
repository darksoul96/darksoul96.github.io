
import './App.css'
import Welcome from './components/welcome'
import About from './components/about'
import React, { useRef } from 'react';
function App() {
  
  const aboutRef = useRef<HTMLDivElement>(null);

  const handleGoToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <nav id="navigation-buttons">
        <div id="navigation-welcome" className="navigation-icon"></div>
        <div id="navigation-about" className="navigation-icon" onClick={handleGoToAbout}></div>
        <div id="navigation-skills" className="navigation-icon"></div>
        <div id="navigation-technologies" className="navigation-icon"></div>
        <div id="navigation-contact" className="navigation-icon"></div>
      </nav>
      <Welcome goToAbout={handleGoToAbout}></Welcome>
      <div ref={aboutRef}>
        <About ></About>
      </div>
      
      
    </>
  )
}

export default App
