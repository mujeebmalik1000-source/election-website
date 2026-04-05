import React from "react";
import "./MissionSection.css";

import card1 from "../images/card1.jpg";
import card2 from "../images/card2.jpg";
import card3 from "../images/card3.jpg";
import card4 from "../images/card4.jpg";
import card5 from "../images/card5.jpg";
import card6 from "../images/card6.jpg";
import card7 from "../images/card7.jpg";
import card8 from "../images/card8.jpg";

const cards = [
  { img: card1, title: "MEDICAL SYSTEM" },
  { img: card2, title: "RESIDENTIAL AREA" },
  { img: card3, title: "TRAFFIC JAM" },
  { img: card4, title: "ECONOMIC ZONE" },
  { img: card5, title: "FOOD SAFETY" },
  { img: card6, title: "FOREIGN POLICY" },
  { img: card7, title: "EDUCATION SYSTEM" },
  { img: card8, title: "FAMILY SAFETY" },
];

const MissionSection = () => {
  return (
    <section className="mission-section">
      <div className="container">
             
        <div className="header-bg">
  <div className="section-header">
    <span className="sub-title">— Our Mission & Vision —</span>
    <h2>
      We Can Make Solution Everything <br />
      To Our Demand.
    </h2>
  </div>
</div>


        <div className="mission-grid">
          {cards.map((card, index) => (
            <div className="mission-card" key={index}>
              <img src={card.img} alt={card.title} />

              <div className="card-label">
                {card.title}
              </div>

              <div className="card-overlay"></div>

              <div className="overlay-content">
                <h3>{card.title}</h3>
                <p>
                  Lorem Ipsum has been the industry's standard dummy
                  of the text ever since make.
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
      {/* <div className="bottom-line"></div> */}
    </section>
  );
};

export default MissionSection;