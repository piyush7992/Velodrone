import "../Services.css";
function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Singh",
      company: "Agriculture Consultant",
      review:
        "Velodrone transformed our farming operations with precise crop monitoring and actionable insights.",
    },
    {
      name: "Ankit Sharma",
      company: "Construction Manager",
      review:
        "Their aerial mapping services helped us reduce surveying time by more than 60%.",
    },
    {
      name: "Priya Verma",
      company: "Energy Sector",
      review:
        "Professional team, excellent reporting, and highly accurate inspection data.",
    },
  ];

  return (
    <section className="testimonials-section">
      <div className="container">

        <span className="testimonial-tag">
          CLIENT TESTIMONIALS
        </span>

        <h2 className="testimonial-title">
          What Our Clients
          <br />
          Say About Us
        </h2>

        <p className="testimonial-subtitle">
          Trusted by businesses, government agencies,
          and organizations across India.
        </p>

        <div className="testimonial-grid">
          {testimonials.map((item, index) => (
            <div className="testimonial-card" key={index}>

              <div className="stars">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="review">
                "{item.review}"
              </p>

              <div className="client-info">
                <div className="avatar">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4>{item.name}</h4>
                  <span>{item.company}</span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Testimonials;