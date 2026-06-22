import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <h2>Velodrone</h2>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/knowledge">Knowledge Center</Link></li>
        </ul>

        <Link className="hero-btn" to="/contact">Get Quote</Link>
      </nav>
    </header>
  );
}

export default Navbar;