import "../Services.css";
import { Link } from "react-router-dom";
const services = [
  {
    slug: "survey-drone",
    title: "Survey Drone",
    icon: "🗺️",
    desc: "High-accuracy survey and mapping platform designed for geospatial projects.",
    detectionRange: "N/A",
    payloadCapacity: "2–5 kg",
    operatingAltitude: "Up to 500 m AGL",
    endurance: "45–90 minutes",
    useCases: ["Topographic surveys", "Construction monitoring", "Mining surveys"]
  },
  {
    slug: "counter-drone",
    title: "Counter Drone System",
    icon: "🛡️",
    desc: "Integrated C-UAS suite — detection, classification and response for sensitive sites.",
    detectionRange: "Up to 5 km (radar + RF fusion)",
    payloadCapacity: "Platform-dependent",
    operatingAltitude: "Ground-based sensors; air response systems up to 300 m",
    endurance: "N/A (sensor network)",
    useCases: ["Critical infrastructure protection", "Event security", "Military perimeters"]
  },
  {
    slug: "surveillance-drone",
    title: "Surveillance Drone",
    icon: "📡",
    desc: "Persistent ISR platform optimized for long-endurance observation and high-quality EO/IR sensors.",
    detectionRange: "Visual detection depends on payload; EO/IR optimized",
    payloadCapacity: "5–12 kg",
    operatingAltitude: "Up to 1000 m AGL",
    endurance: "2–8 hours",
    useCases: ["Border surveillance", "Maritime patrol", "Critical asset monitoring"]
  },
  {
    title: "Precision Agriculture",
    icon: "🌾",
    desc: "Crop health monitoring, pesticide spraying, and yield optimization."
  },
  {
    title: "Industrial Inspection",
    icon: "🔍",
    desc: "Safe inspection of power lines, pipelines, and infrastructure."
  },
  {
    title: "Pilot Training",
    icon: "🎓",
    desc: "DGCA-approved drone pilot certification programs."
  }
];

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <span className="section-tag">OUR SERVICES</span>

        <h2 className="section-title">
          Smart Drone Solutions <br />
          For Every Industry
        </h2>

        <p className="section-subtitle">
          Delivering precision, efficiency, and innovation with
          next-generation drone technology.
        </p>

        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">{item.icon}</div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

              {item.payloadCapacity && (
                <ul className="spec-list">
                  {item.detectionRange && (
                    <li>
                      <strong>Detection range:</strong> {item.detectionRange}
                    </li>
                  )}
                  {item.payloadCapacity && (
                    <li>
                      <strong>Payload capacity:</strong> {item.payloadCapacity}
                    </li>
                  )}
                  {item.operatingAltitude && (
                    <li>
                      <strong>Operating altitude:</strong> {item.operatingAltitude}
                    </li>
                  )}
                  {item.endurance && (
                    <li>
                      <strong>Endurance:</strong> {item.endurance}
                    </li>
                  )}
                </ul>
              )}

              <div className="service-actions">
                <Link className="service-btn" to={item.slug ? `/${item.slug}` : '#'}>
                  Learn More →
                </Link>

                <Link
                  className="spec-btn"
                  to={`/contact?service=${item.slug || encodeURIComponent(item.title)}`}
                >
                  Request Specifications
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;