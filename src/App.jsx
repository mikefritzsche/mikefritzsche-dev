import {useEffect, useState} from 'react';
import './App.css';
import './styles.scss';
import NavBar from "./components/NavBar";
import Logo from './components/Logo';
import Resume from "./components/Resume";
import Menu from "./components/Menu.jsx";
import Services from "./components/Services.jsx";

function App() {
  const [fadeOut, setFadeOut] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const hasVisited = localStorage.getItem('hasVisited');

    if (hasVisited) {
      setShowNavbar(true);
      document.body.classList.add('navbar-visible'); // Change to solid background color
    } else {
      const timer = setTimeout(() => {
        setFadeOut(true);
      }, 1000); // Start fading out after 1 second

      const fadeTimer = setTimeout(() => {
        setShowNavbar(true);
        document.body.classList.add('navbar-visible'); // Change to solid background color
        localStorage.setItem('hasVisited', 'true');
      }, 2000); // Show navbar after 2 seconds to ensure full fade out

      return () => {
        clearTimeout(timer);
        clearTimeout(fadeTimer);
      };
    }
  }, []);

  return (
    <>
      {!showNavbar && (
        <div className="center-container">
          <h1 className={`logo ${fadeOut ? 'fade-out' : ''}`}><Logo/></h1>
        </div>
      )}
      {showNavbar && (
        <>
          <NavBar/>
          <div className="container">
            <div className="content">
              <Menu/>
              <Services/>
              <Resume/>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
