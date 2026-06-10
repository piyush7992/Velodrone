import "../Services.css";

function SurveillanceDrone() {
  return (
    <section className="product-page container">
      <h2>Surveillance Drone — Persistent ISR Platform</h2>

      <p>
        The Surveillance Drone is a long-endurance platform optimized for ISR
        missions. It carries stabilized EO/IR gimbals, can integrate thermal
        payloads and supports secure datalinks for real-time monitoring and
        analytics.
      </p>

      <h3>Key Specifications</h3>

      <ul className="spec-list">
        <li><strong>Detection range:</strong> Visual detection depends on payload</li>
        <li><strong>Payload capacity:</strong> 5–12 kg</li>
        <li><strong>Operating altitude:</strong> Up to 1000 m AGL</li>
        <li><strong>Endurance:</strong> 2–8 hours</li>
        <li><strong>Sensors:</strong> EO/IR gimbal, long-range zoom, thermal options</li>
      </ul>

      <h3>Use Cases</h3>
      <ul>
        <li>Border and coastal surveillance</li>
        <li>Maritime patrol and search operations</li>
        <li>Critical asset monitoring and infrastructure protection</li>
      </ul>

      <p>
        <a className="hero-btn primary" href="/contact?service=surveillance-drone">Request Specifications</a>
        <a className="hero-btn secondary" href="/contact?demo=true">Request a Demo</a>
      </p>
    </section>
  );
}

export default SurveillanceDrone;
