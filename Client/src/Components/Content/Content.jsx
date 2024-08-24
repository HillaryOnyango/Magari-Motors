import React from "react";
import "./content.css";

function Content() {
  return (
    <div className="content-section">
      <h2>
        We’re Setting a <span className="highlight">New Standard</span>
      </h2>
      <p className="description">
        We understand the uncertainties and hassle that come with the car
        purchasing process. That’s why we’re dedicated to connecting informed
        buyers with responsible sellers, and setting a new standard in the
        region for trust, transparency, and confidence.
      </p>

      <div className="cards-container">
        <div className="card">
          <div className="icon">
            {/* Replace with an actual icon */}
            🔍
          </div>
          <h3>Natural Language Search</h3>
          <p>
            Our advanced AI search using natural language means that your search
            process is streamlined like never before. Search based on what you
            really...
          </p>
        </div>

        <div className="card">
          <div className="icon">
            {/* Replace with an actual icon */}
            🤖
          </div>
          <h3>Artificial Intelligence</h3>
          <p>
            We’ve streamlined the entire listing process by incorporating
            Artificial Intelligence, so you spend less time creating adverts and
            more time actively...
          </p>
        </div>

        <div className="card">
          <div className="icon">
            {/* Replace with an actual icon */}
            📚
          </div>
          <h3>Guides, Reviews, and FAQs</h3>
          <p>
            We’ve got you covered with our expertly crafted guides and FAQs. We
            empower you with everything you need to know about purchasing...
          </p>
        </div>
      </div>
    </div>
  );
}

export default Content;
