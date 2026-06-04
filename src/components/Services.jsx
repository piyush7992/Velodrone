import "../Services.css";
const services = [
  {
    title: "Precision Agriculture",
    icon: "🌾",
    desc: "Crop health monitoring, pesticide spraying, and yield optimization."
  },
  {
    title: "Aerial Mapping",
    icon: "🗺️",
    desc: "High-accuracy 3D mapping and land surveying solutions."
  },
  {
    title: "Industrial Inspection",
    icon: "🔍",
    desc: "Safe inspection of power lines, pipelines, and infrastructure."
  },
  {
    title: "Surveillance",
    icon: "🛡️",
    desc: "Real-time aerial monitoring for security and events."
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

              <button className="service-btn">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;