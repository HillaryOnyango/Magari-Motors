import React from "react";
import "./review.css";
import HavalImg from "../../assets/Haval.png.";
import ToyotaCamry from "../../assets/ToyotaCamry.png";
import ChevroletCruze from "../../assets/ChevroletCruze.png";

function Review() {
  return (
    <div className="review-section">
      <div className="review-header">
        <h2>Latest Reviews</h2>
        <button className="view-all-btn">VIEW ALL REVIEWS</button>
      </div>
      <div className="review-cards">
        <div className="review-card">
          <img src={HavalImg} alt="Car" className="hero-img" />
          <div className="card-content">
            <div className="rating">★★★★★</div>
            <h3>2023 Haval H6: A Compelling Choice</h3>
            <p>Automarket | 10 August, 2024 | 5 min read</p>
          </div>
        </div>
        <div className="review-card">
          <img src={ToyotaCamry} alt="2022 Toyota Camry" />
          <div className="card-content">
            <div className="rating">★★★★☆</div>
            <h3>2022 Toyota Camry: Refined & Reliable</h3>
            <p>Automarket | 10 August, 2024 | 5 min read</p>
          </div>
        </div>
        <div className="review-card">
          <img src={hevroletCruze} alt="2023 Chevrolet Cruze" />
          <div className="card-content">
            <div className="rating">★★★★☆</div>
            <h3>2023 Chevrolet Cruze: A Balanced Contender</h3>
            <p>Automarket | 10 August, 2024 | 4 min read</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Review;
