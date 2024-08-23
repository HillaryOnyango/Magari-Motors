import React from "react";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <span className="logo-icon">M</span>
        <span className="logo-text">AUTOMARKET</span>
      </div>
      <div className="navbar-links">
        <a href="#reviews">Car Reviews</a>
        <a href="#guides">Guides & FAQs</a>
      </div>
      <div className="navbar-actions">
        <div className="profile-icon">🔔</div>
        <div className="user-icon">👤</div>
        <button className="sell-car-btn">SELL MY CAR</button>
      </div>
    </nav>
  );
}

export default Navbar;
