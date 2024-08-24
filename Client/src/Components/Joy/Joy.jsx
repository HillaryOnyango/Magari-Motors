import React from "react";
import "./joy.css";
import bmwX1 from "../../assets/bmw-x1.png";

function Joy() {
  return (
    <div className="joy-container">
      <div className="joy-content">
        <div className="joy-text">
          <span className="bmw">BMW</span>
          <span className="joy">JOY</span>
          <span className="days">DAYS</span>
        </div>
        <div className="joy-image-container">
          <img src={bmwX1} alt="BMW X1" className="joy-image" />
          <div className="joy-tagline">
            THIS FESTIVE SEASON, DRIVE HOME
            <br />
            THE BMW X1 AT <span className="price">AED 999*/MONTH.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Joy;
