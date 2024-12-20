import React, { useState } from 'react';

const NavBar = ({ currentPath = '/' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/resume', label: 'Resume' }
  ];

  return (
    <>
      <nav className="navbar">
        <h1 className="navbar-logo">
          <a href="/">
            &lt;Mike Fritzsche /&gt;
          </a>
        </h1>
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>
      </nav>
      <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        {navItems.map(({ path, label }) => (
          <li
            key={path}
            className={currentPath === path ? 'active' : ''}
            onClick={() => {
              window.location.href = path;
              setIsMenuOpen(false);
            }}
          >
            {label}
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
// import Logo from '../components/Logo';
//
// const NavBar = () => {
//   return (
//     <nav className="navbar">
//       <div className="navbar-logo"><Logo/></div>
//       <button onClick={() => {
//         localStorage.removeItem('hasVisited');
//         document.body.classList.remove('navbar-visible');
//         window.location.reload(); // Reload the page to see the effect again
//       }} className="reset-button">Reset Visit
//       </button>
//     </nav>
//   );
// }
//
// export default NavBar
