import React from "react";
import "./faqs.css";
import leftArrow from "../../assets/left-arrow.png";
import rightArrow from "../../assets/right-arrow.png";

// Import guide images
import guide1Image from "../../assets/guide1.png";
import guide2Image from "../../assets/guide2.png";
import guide3Image from "../../assets/guide3.jpeg";
import guide4Image from "../../assets/guide4.png";

function Faqs() {
  const guides = [
    {
      date: "20 August, 2024 | 4 min read",
      title: "Cooling car paint? Nissan might have the answer!",
      image: guide1Image,
    },
    {
      date: "14 July, 2024 | 5 min read",
      title: "Wheel Balancing & Alignment. Whats the difference?",
      image: guide2Image,
    },
    {
      date: "13 June, 2024 | 7 min read",
      title: "Mercedes CLS63: Isn't that a Grandad's car?",
      image: guide3Image,
    },
    {
      date: "11 June, 2024 | 7 min read",
      title: "Nissan Patrol: Does it live up to the hype?",
      image: guide4Image,
    },
  ];

  return (
    <div className="faqs-container">
      <div className="faqs-header">
        <h2>
          Latest <span>Guides & FAQs</span>
        </h2>
        <button className="view-all-btn">VIEW ALL</button>
      </div>
      <div className="faqs-content">
        <button className="arrow-btn left-arrow">
          <img src={leftArrow} alt="left arrow" />
        </button>
        <div className="faqs-cards">
          {guides.map((guide, index) => (
            <div className="faqs-card" key={index}>
              <img
                src={guide.image}
                alt={guide.title}
                className="faqs-card-image"
              />
              <div className="faqs-card-content">
                <p className="faqs-card-date">{guide.date}</p>
                <h3 className="faqs-card-title">{guide.title}</h3>
              </div>
            </div>
          ))}
        </div>
        <button className="arrow-btn right-arrow">
          <img src={rightArrow} alt="right arrow" />
        </button>
      </div>
    </div>
  );
}

export default Faqs;
