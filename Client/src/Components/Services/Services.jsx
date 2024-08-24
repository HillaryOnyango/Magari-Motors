import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faCar,
  faBook,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import "./services.css";

function Services() {
  return (
    <div className="services-container">
      <h2>
        Our <span className="highlight">Services</span>
      </h2>
      <div className="services-grid">
        <div className="service-item">
          <FontAwesomeIcon icon={faList} className="icon" />
          <p>Classified Listing</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faCar} className="icon" />
          <p>Vehicle History</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faBook} className="icon" />
          <p>Guides, FAQ’s and More</p>
        </div>
        <div className="service-item">
          <FontAwesomeIcon icon={faPlus} className="icon" />
          <p>Much More to Come!</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
