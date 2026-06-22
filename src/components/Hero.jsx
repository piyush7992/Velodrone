import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <span className="hero-tag">DGCA Compliant & Certified</span>

        <h1>
          India's Indigenous CounterDrone Systems for Defense &amp; Critical
          Infrastructure
        </h1>

        <p className="hero-lead">
          End-to-end, sovereign counter-drone and surveillance solutions
          engineered in India for mission-critical protection — detection,
          classification and neutralization with battlefield reliability and
          enterprise-grade safety.
        </p>

        <div className="hero-buttons">
          <Link className="hero-btn primary" to="/products">View Products</Link>
          <Link className="hero-btn secondary" to="/contact?demo=true">Request a Demo</Link>
        </div>

      </div>
    </section>
  );
}

export default Hero;