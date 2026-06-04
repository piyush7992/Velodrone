import "../Services.css";
function WhyChooseUs() {
  const features = [
    {
      icon: "✅",
      title: "DGCA Certified Pilots",
      desc: "Experienced and licensed drone operators ensuring safe and compliant flights."
    },
    {
      icon: "⚡",
      title: "Fast Data Delivery",
      desc: "Receive maps, reports, and analytics within 24 hours of project completion."
    },
    {
      icon: "🛠️",
      title: "End-to-End Support",
      desc: "From mission planning to final reporting, we manage everything."
    },
    {
      icon: "🚀",
      title: "500+ Successful Missions",
      desc: "Trusted by businesses, government agencies, and farmers across India."
    }
  ];

  return (
    <section className="why-section" id="about">
      <div className="container">

        <span className="why-tag">
          WHY CHOOSE US
        </span>

        <h2 className="why-title">
          Built For Innovation,
          <br />
          Trusted Across India
        </h2>

        <p className="why-subtitle">
          Velodrone combines cutting-edge drone technology with
          industry expertise to deliver reliable, safe, and
          high-precision aerial solutions.
        </p>

        <div className="why-grid">
          {features.map((item, index) => (
            <div className="why-card" key={index}>
              <div className="why-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="stats">
          <div className="stat-box">
            <h2>500+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-box">
            <h2>18+</h2>
            <p>States Served</p>
          </div>

          <div className="stat-box">
            <h2>99%</h2>
            <p>Client Satisfaction</p>
          </div>

          <div className="stat-box">
            <h2>8+</h2>
            <p>Years Experience</p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;