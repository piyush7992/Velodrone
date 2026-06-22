import React from "react";

function CaseStudies() {
  const caseStudies = [
    {
      title: "Airport Airspace Security",
      icon: "🛫",
      challenge:
        "Unauthorized drones entering restricted airport zones can disrupt flight operations and pose safety risks.",
      solution:
        "Deployment of VeloDrone Counter-Drone System with real-time detection and jamming capabilities.",
      benefits: [
        "Early drone threat detection",
        "Rapid neutralization response",
        "Enhanced airport security",
      ],
      tech: "Drone Detection | RF Jamming | Threat Monitoring",
    },
    {
      title: "Border Surveillance & Protection",
      icon: "🛡️",
      challenge:
        "Monitoring vast border areas and detecting unauthorized aerial activities.",
      solution:
        "Integration of Surveillance Drones and Counter-Drone Systems for continuous monitoring.",
      benefits: [
        "Real-time situational awareness",
        "Improved threat identification",
        "Enhanced border protection",
      ],
      tech: "Night Vision | Live Video Feed | AI-Assisted Monitoring",
    },
    {
      title: "Critical Infrastructure Protection",
      icon: "🏭",
      challenge:
        "Protecting power plants, government facilities, and industrial assets from drone-based threats.",
      solution:
        "Deployment of a multi-layer counter-drone security network.",
      benefits: [
        "Continuous airspace monitoring",
        "Prevention of unauthorized drone access",
        "Increased facility security",
      ],
      tech: "Drone Detection | Soft Kill | Hard Kill Systems",
    },
    {
      title: "Survey & Mapping Operations",
      icon: "📍",
      challenge:
        "Traditional surveying methods are time-consuming and resource-intensive.",
      solution:
        "Utilization of VeloDrone Survey Drones equipped with GPS and LIDAR technology.",
      benefits: [
        "Faster project completion",
        "High-accuracy mapping",
        "Reduced operational costs",
      ],
      tech: "GPS Mapping | LIDAR | High-Resolution Imaging",
    },
  ];

  return (
    <section className="case-studies">
      <div className="container">
        <span className="section-tag">Case Studies</span>

        <h2 className="section-title">Real-World Applications of VeloDrone Solutions</h2>

        <p className="section-subtitle">
          Discover how VeloDrone's advanced drone and counter-drone technologies
          enhance security, surveillance, and operational efficiency.
        </p>

        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <article className="case-card" key={index}>
              <div className="card-accent" />
              <div className="card-header">
                <div className="card-icon" aria-hidden>
                  {study.icon}
                </div>
                <h3 className="card-title">{study.title}</h3>
              </div>

              <p className="card-challenge"><strong>Challenge:</strong> {study.challenge}</p>

              <p className="card-solution"><strong>Solution:</strong> {study.solution}</p>

              <ul className="card-benefits">
                {study.benefits.map((item, idx) => (
                  <li key={idx}><span className="check">✓</span>{item}</li>
                ))}
              </ul>

              <div className="tech-badges">
                {study.tech.split("|").map((t, i) => (
                  <span className="tech-badge" key={i}>{t.trim()}</span>
                ))}
              </div>

              <div className="card-action">
                <button className="case-cta" aria-label={`Read ${study.title} case study`}>Learn More</button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;