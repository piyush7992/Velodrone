import { useState } from "react";
import "../Services.css";

function FAQ() {
  const [open, setOpen] = useState(null);

  const faq = [
    {
      q: "Is Velodrone DGCA approved?",
      a: "Yes, all our drone operations are fully DGCA compliant and follow Indian aviation regulations."
    },
    {
      q: "Do you offer drone pilot training?",
      a: "Yes, we provide DGCA-approved drone pilot training and certification programs."
    },
    {
      q: "What industries do you serve?",
      a: "We serve agriculture, construction, mining, energy, real estate, government, and disaster response sectors."
    },
    {
      q: "How accurate are your drone surveys?",
      a: "Our drone mapping solutions provide highly accurate data suitable for professional surveying and analysis."
    }
  ];

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">

        <span className="faq-tag">
          FREQUENTLY ASKED QUESTIONS
        </span>

        <h2 className="faq-title">
          Got Questions?
          <br />
          We've Got Answers
        </h2>

        <p className="faq-subtitle">
          Everything you need to know about our drone services,
          certifications, and operations.
        </p>

        <div className="faq-container">
          {faq.map((item, index) => (
            <div
              className={`faq-card ${
                open === index ? "active" : ""
              }`}
              key={index}
            >
              <div
                className="faq-question"
                onClick={() => toggleFAQ(index)}
              >
                <h4>{item.q}</h4>

                <span>
                  {open === index ? "−" : "+"}
                </span>
              </div>

              <div
                className={`faq-answer ${
                  open === index ? "show" : ""
                }`}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default FAQ;