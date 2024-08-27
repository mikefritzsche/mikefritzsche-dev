import { useEffect, useState } from 'react';
import './App.css';

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
          <h1 className={`logo ${fadeOut ? 'fade-out' : ''}`}>Mike Fritzsche</h1>
        </div>
      )}
      {showNavbar && (
        <nav className="navbar">
          <h1 className="navbar-logo">Mike Fritzsche</h1>
          <button onClick={() => {
            localStorage.removeItem('hasVisited');
            document.body.classList.remove('navbar-visible');
            window.location.reload(); // Reload the page to see the effect again
          }} className="reset-button">Reset Visit</button>
        </nav>
      )}
      <div className="card"></div>
    </>
  );
}

export default App;
