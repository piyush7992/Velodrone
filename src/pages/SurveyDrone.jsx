import "../Services.css";

function SurveyDrone() {
  return (
    <section className="product-page container">
      <h2>Survey Drone — Precision Mapping & Geospatial Platform</h2>

      <p>
        The Survey Drone is designed for high-accuracy mapping, photogrammetry
        and geospatial data collection. It combines a GNSS-ready airframe with
        stabilized camera payloads and automated flight planning to deliver
        centimeter-class deliverables suitable for engineering, mining and
        infrastructure projects.
      </p>

      <h3>Key Specifications</h3>

      <ul className="spec-list">
        <li><strong>Detection range:</strong> N/A (not applicable)</li>
        <li><strong>Payload capacity:</strong> 2–5 kg</li>
        <li><strong>Operating altitude:</strong> Up to 500 m AGL</li>
        <li><strong>Endurance:</strong> 45–90 minutes</li>
        <li><strong>Sensors:</strong> RGB/Multispectral/RGB+RTK GNSS options</li>
      </ul>

      <h3>Use Cases</h3>
      <ul>
        <li>Topographic and cadastral surveys</li>
        <li>Construction progress monitoring</li>
        <li>Mining volume calculations</li>
        <li>Environmental monitoring and land-use surveys</li>
      </ul>

      <p>
        <a className="hero-btn primary" href="/contact?service=survey-drone">Request Specifications</a>
        <a className="hero-btn secondary" href="/contact?demo=true">Request a Demo</a>
      </p>
    </section>
  );
}

export default SurveyDrone;
