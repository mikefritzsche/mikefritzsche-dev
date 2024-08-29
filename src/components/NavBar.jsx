import Logo from '../components/Logo';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo"><Logo/></div>
      <button onClick={() => {
        localStorage.removeItem('hasVisited');
        document.body.classList.remove('navbar-visible');
        window.location.reload(); // Reload the page to see the effect again
      }} className="reset-button">Reset Visit
      </button>
    </nav>
  );
}

export default NavBar
