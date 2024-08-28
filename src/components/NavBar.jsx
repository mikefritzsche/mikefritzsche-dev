import Logo from '../components/Logo';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo"><Logo/></h1>
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
