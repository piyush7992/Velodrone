import "../Services.css";
function Process() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      desc: "Understand client requirements, project goals, and operational needs."
    },
    {
      number: "02",
      title: "Planning",
      desc: "Design flight paths, obtain permissions, and prepare mission strategies."
    },
    {
      number: "03",
      title: "Operations",
      desc: "Execute drone missions safely using DGCA-certified pilots and equipment."
    },
    {
      number: "04",
      title: "Delivery",
      desc: "Provide processed data, reports, maps, and actionable insights."
    }
  ];

  return (
    <section className="process-section">
      <div className="container">

        <span className="process-tag">
          HOW IT WORKS
        </span>

        <h2 className="process-title">
          Our Simple & Efficient
          <br />
          Workflow Process
        </h2>

        <p className="process-subtitle">
          We follow a structured approach to ensure every
          drone mission delivers accurate results, maximum
          efficiency, and complete client satisfaction.
        </p>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div className="process-card" key={index}>

              <div className="process-number">
                {step.number}
              </div>

              <h3>{step.title}</h3>

              <p>{step.desc}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;