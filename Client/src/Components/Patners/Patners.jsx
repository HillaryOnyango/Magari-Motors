import React from "react";
import "./patners.css";

// Import your images
import partner1 from "../../assets/patner1.png";
import partner2 from "../../assets/patner2.png";
import partner3 from "../../assets/patner3.png";
import partner4 from "../../assets/patner4.png";
import partner5 from "../../assets/patner5.png";

const partnersData = [
  { id: 1, logo: partner1, alt: "Partner 1" },
  { id: 2, logo: partner2, alt: "Partner 2" },
  { id: 3, logo: partner3, alt: "Partner 3" },
  { id: 4, logo: partner4, alt: "Partner 4" },
  { id: 5, logo: partner5, alt: "Partner 5" },
];

function Partners() {
  return (
    <section className="partners-section">
      <h2 className="partners-title">Our Partners</h2>
      <div className="partners-grid">
        {partnersData.map((partner) => (
          <div key={partner.id} className="partner-logo">
            <img src={partner.logo} alt={partner.alt} />
          </div>
        ))}
      </div>
      <div className="view-all-container">
        <a href="/all-partners" className="view-all-button">
          VIEW ALL PARTNERS
        </a>
      </div>
    </section>
  );
}

export default Partners;
