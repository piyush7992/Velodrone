import "../Services.css";

function CounterDrone() {
  return (
    <section className="product-page container">
      <h2>Counter Drone System — C-UAS Suite</h2>

      <p>
        Our Counter Drone System (C-UAS) is a multi-sensor, modular suite
        engineered to detect, classify and mitigate unauthorized drones near
        critical infrastructure. The system fuses radar, RF, and EO sensors to
        provide persistent situational awareness and robust track continuity.
      </p>

      <h3>Key Specifications</h3>

      <ul className="spec-list">
        <li><strong>Detection range:</strong> Up to 5 km (radar + RF fusion)</li>
        <li><strong>Payload capacity:</strong> Platform-dependent</li>
        <li><strong>Operating altitude:</strong> Ground-based sensors; air response systems up to 300 m</li>
        <li><strong>Endurance:</strong> Sensor network — continuous operation</li>
        <li><strong>Sensors:</strong> Compact radar, RF direction-finding, EO/IR PTZ cameras</li>
      </ul>

      <h3>Use Cases</h3>
      <ul>
        <li>Protection of WMD and defence installations</li>
        <li>Airport and airfield perimeter defence</li>
        <li>Large public events and VIP protection</li>
      </ul>

      <p>
        <a className="hero-btn primary" href="/contact?service=counter-drone">Request Specifications</a>
        <a className="hero-btn secondary" href="/contact?demo=true">Request a Demo</a>
      </p>
    </section>
  );
}

export default CounterDrone;
