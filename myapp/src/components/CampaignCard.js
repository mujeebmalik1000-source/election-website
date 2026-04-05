import React from "react";
import "./CampaignCard.css";
import donateImg from "../images/donate-bg.jpg.jpeg";
import bgImg from "../images/1-png.jp.png";   

const CampaignCard = () => {
  return (
    <section
      className="campaign-section"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="overlay"></div>

      <div className="campaign-wrapper">
        <div className="campaign-box">

          {/* Left Curve Shape */}
          <div className="left-shape"></div>

          <div className="campaign-content">

            {/* Left Image */}
            <div className="left-image">
              <img src={donateImg} alt="donate" />
            </div>

            {/* Right Content */}
            <div className="right-content">
              <span className="sub-title">DONATE TODAY!</span>

              <h2>
                You Can Contribute Our Last Campaign
              </h2>

              {/* Progress */}
              <div className="progress-bar">
                <div className="progress-fill"></div>
              </div>

              <div className="progress-info">
                <div>Goal: <strong>$85,000</strong></div>
                <div>Raised: <strong>$74,000</strong></div>
              </div>

              <button className="about-donate-btn">
                DONATE NOW
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignCard;