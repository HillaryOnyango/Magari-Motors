import React from "react";
import "./hero.css";
import HeroImg from "../../assets/hero.png";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="hero-words">
          <h1>BUY SMART, DRIVE HAPPY</h1>
          <p>
            Redefining Your Car Buying Experience With Our AI Powered Platform
          </p>
        </div>
        <img src={HeroImg} alt="Car" className="hero-img" />
      </div>
      <div className="search-bar">
        <input type="text" placeholder="Red Convertible" />
        <button className="ai-search-btn">AI SEARCH</button>
        <button className="traditional-search-btn">TRADITIONAL SEARCH</button>
      </div>
    </div>
  );
}

export default Hero;
