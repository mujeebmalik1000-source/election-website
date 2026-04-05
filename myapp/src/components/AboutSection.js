import React from "react";
import "./AboutSection.css";
import aboutImg from "../images/about.jpg.jpeg"; // apni image yahan lagao

const AboutSection = () => {
  return (
    <section className="about">
      <div className="about-container">

        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={aboutImg} alt="about" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-right">
          <span className="about-tag">ABOUT US</span>

          <h2>
            We Can Make Our New <br />
            History Together!
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Vestibulum tortor quam feugiat vitae ultricies eget.
             Lorem ipsum dolor sit amet consectetur adipiscing elit. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis.
          </p>

          <div className="about-features">

            <div className="feature-box">
              <div className="icon-circle">🏛️</div>
              <div>
                <h4>Our Campaign</h4>
                <p>Standard dummy of the text ever the scrambled it to make.</p>
                   
              </div>
            </div>

            <div className="feature-box">
              <div className="icon-circle">👥</div>
              <div>
                <h4>Become A Volunteer</h4>
                <p>Standard dummy of the text ever the scrambled it to make.</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;