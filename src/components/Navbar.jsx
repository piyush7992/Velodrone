function Navbar() {
  return (
    <header>
      <nav className="container">
        <h2>Velodrone</h2>

        <ul>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#about">Why Us</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button>Get Quote</button>
      </nav>
    </header>
  );
}

export default Navbar;