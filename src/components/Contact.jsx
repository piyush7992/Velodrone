
import { useState } from "react";
import "../Services.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We'll contact you soon.");
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <span className="contact-tag">
          CONTACT US
        </span>

        <h2 className="contact-title">
          Let's Discuss Your
          <br />
          Drone Project
        </h2>

        <p className="contact-subtitle">
          Ready to transform your business with drone technology?
          Get in touch with our experts today.
        </p>

        <div className="contact-wrapper">

          <div className="contact-info">

            <div className="info-card">
              <span>📧</span>
              <div>
                <h4>Email</h4>
                <p>info@velodrone.in</p>
              </div>
            </div>

            <div className="info-card">
              <span>📞</span>
              <div>
                <h4>Phone</h4>
                <p>+91 9876543210</p>
              </div>
            </div>

            <div className="info-card">
              <span>📍</span>
              <div>
                <h4>Location</h4>
                <p>Bangalore, Karnataka</p>
              </div>
            </div>

          </div>

          <form className="contact-form" onSubmit={handleSubmit}>

            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  name: e.target.value
                })
              }
            />

            <input
              type="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value
                })
              }
            />

            <input
              type="text"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value
                })
              }
            />

            <label htmlFor="service-select" className="sr-only">Service</label>
            <select
              id="service-select"
              aria-label="Service"
              value={formData.service}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  service: e.target.value
                })
              }
            >
              <option value="">Select Service</option>
              <option value="agriculture">Agriculture</option>
              <option value="mapping">Drone Mapping</option>
              <option value="inspection">Inspection</option>
              <option value="surveillance">Surveillance</option>
              <option value="training">Pilot Training</option>
            </select>

            <textarea
              rows="5"
              placeholder="Tell us about your project..."
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value
                })
              }
            />

            <button type="submit">
              Send Enquiry 🚀
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}

export default Contact;
