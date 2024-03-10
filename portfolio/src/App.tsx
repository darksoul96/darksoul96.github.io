
import './App.css'
import Welcome from './components/welcome'
import About from './components/about'
import { useEffect, useRef, useState } from 'react';
import Skills from './components/skills';
import Technologies from './components/technologies';
import Contact from './components/contact';
function App() {

  const welcomeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const technologiesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleGoToWelcome = () => {
      if (welcomeRef.current) {
        welcomeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

  const handleGoToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToSkills = () => {
    if (skillsRef.current) {
      skillsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToTechnologies = () => {
    if (technologiesRef.current) {
      technologiesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleGoToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [currentPage, setCurrentPage] = useState(0);

  const navWelcomeClick = () => {
    handleGoToWelcome(); 
    setCurrentPage(0);
  }

  const navAboutClick = () => {
    handleGoToAbout();
    setCurrentPage(1);
  }

  const navSkillsClick = () => {
    handleGoToSkills();
    setCurrentPage(2)
  }

  const navTechnologiesClick = () => {
    handleGoToTechnologies();
    setCurrentPage(3)
  }

  const navContactClick = () => {
    handleGoToContact();
    setCurrentPage(4)
  }


  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      let success = false;
      new Promise<boolean>((resolve, reject) => {
        if (event.deltaY > 0) {
          success = true;
          if (currentPage == 0) {
            handleGoToAbout();
            setCurrentPage(currentPage + 1);
          } else if (currentPage == 1) {
            handleGoToSkills();
            setCurrentPage(currentPage + 1);
          } else if (currentPage == 2) {
            handleGoToTechnologies();
            setCurrentPage(currentPage + 1);
          } else if (currentPage == 3) {
            handleGoToContact();
            setCurrentPage(currentPage + 1);
          }
        } else {
          success = true;
          if (currentPage == 1) {
            handleGoToWelcome();
            setCurrentPage(currentPage - 1);
          } else if (currentPage == 2) {
            handleGoToAbout();
            setCurrentPage(currentPage - 1);
          } else if (currentPage == 3) {
            handleGoToSkills();
            setCurrentPage(currentPage - 1);
          } else if (currentPage == 4) {
            handleGoToTechnologies();
            setCurrentPage(currentPage - 1);
          }
        }

        resolve(success);
        reject(!success);
      }).then(() => {
        setTimeout(() => {

        }, 1000);
      });

      
      

    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  });


  return (
    <div >
      <nav id="navigation-buttons">
        <div id="navigation-welcome" className={ currentPage == 0 ? "current-nav navigation-icon" : "navigation-icon"}  onClick={ navWelcomeClick }></div>
        <div id="navigation-about" className={ currentPage == 1 ? "current-nav navigation-icon" : "navigation-icon"} onClick={ navAboutClick } ></div>
        <div id="navigation-skills" className={ currentPage == 2 ? "current-nav navigation-icon" : "navigation-icon"} onClick={ navSkillsClick }></div>
        <div id="navigation-technologies" className={ currentPage == 3 ? "current-nav navigation-icon" : "navigation-icon"} onClick={ navTechnologiesClick }></div>
        <div id="navigation-contact" className={ currentPage == 4 ? "current-nav navigation-icon" : "navigation-icon"} onClick={ navContactClick }></div>
      </nav>
      <div ref={welcomeRef} className="navigation-page" >
        <Welcome></Welcome>
      </div>
      
      <div ref={aboutRef} className="navigation-page">
        <About ></About>
      </div>

      <div ref={skillsRef} className="navigation-page">
        <Skills></Skills>
      </div>

      <div ref={technologiesRef} className="navigation-page">
        <Technologies></Technologies>
      </div>

      <div ref={contactRef} className="navigation-page">
        <Contact></Contact>
      </div>
      
    </div>
  )
}

export default App


