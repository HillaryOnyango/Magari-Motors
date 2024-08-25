import React from "react";
import "./footer.css";
import appStoreLogo from "../../assets/app-store-logo.png";
import playStoreLogo from "../../assets/play-store-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon">A</span>
          <span className="logo-text">AUTOMARKET</span>
        </div>

        <div className="footer-links">
          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="/cars">Cars</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Info</h3>
            <ul>
              <li>
                <a href="/reviews">Reviews</a>
              </li>
              <li>
                <a href="/guides-faqs">Guides & FAQs</a>
              </li>
              <li>
                <a href="/terms">Terms & Conditions</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Coming Soon</h3>
            <div className="app-buttons">
              <a href="#" className="app-store-button">
                <img src={appStoreLogo} alt="App Store" />
              </a>
              <a href="#" className="play-store-button">
                <img src={playStoreLogo} alt="Play Store" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2024 MagariAuto . All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-icon">
            f
          </a>
          <a href="#" className="social-icon">
            ig
          </a>
          <a href="#" className="social-icon">
            X
          </a>
          <a href="#" className="social-icon">
            in
          </a>
          <a href="#" className="social-icon">
            yt
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
