import "../Services.css";
const industries = [
  { icon: "🌾", name: "Agriculture" },
  { icon: "🏗️", name: "Construction" },
  { icon: "⛏️", name: "Mining" },
  { icon: "🏛️", name: "Government" },
  { icon: "⚡", name: "Energy" },
  { icon: "🏢", name: "Real Estate" },
  { icon: "🌍", name: "Environment" },
  { icon: "🚨", name: "Disaster Response" },
];

function Industries() {
  return (
    <section className="industries-section" id="industries">
      <div className="container">

        <span className="industry-tag">
          INDUSTRIES WE SERVE
        </span>

        <h2 className="industry-title">
          Transforming Industries
          <br />
          With Drone Technology
        </h2>

        <p className="industry-subtitle">
          From precision agriculture to disaster response,
          our drone solutions help organizations make
          smarter and faster decisions.
        </p>

        <div className="industry-grid">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">
                {industry.icon}
              </div>

              <h3>{industry.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Industries;