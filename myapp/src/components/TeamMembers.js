import React from "react";
import "./TeamMembers.css";

import img1 from "../images/1.cap-jp.jpg";
import img2 from "../images/2.cap-jp.jpg";
import img3 from "../images/3.cap-jp.jpg";
import img4 from "../images/4.cap-jp.jpg";

const TeamMembers = () => {
  return (
    <section className="staff-section">
      <div className="container">

        <div className="staff-header">
          <span>— TEAM MEMBERS —</span>
          <h2>Campaign Staff</h2>
        </div>

        <div className="staff-grid">

          <div className="staff-card">
            <div className="staff-img">
              <img src={img1} alt="" />

              <div className="staff-overlay">
                <span>Founder</span>
                <h3>Harry Abraham</h3>
                <div className="plus">+</div>
              </div>

            </div>
          </div>

          <div className="staff-card">
            <div className="staff-img">
              <img src={img2} alt="" />

              <div className="staff-overlay">
                <span>Manager</span>
                <h3>John Smith</h3>
                <div className="plus">+</div>
              </div>

            </div>
          </div>

          <div className="staff-card">
            <div className="staff-img">
              <img src={img3} alt="" />

              <div className="staff-overlay">
                <span>Leader</span>
                <h3>David Lee</h3>
                <div className="plus">+</div>
              </div>

            </div>
          </div>

          <div className="staff-card">
            <div className="staff-img">
              <img src={img4} alt="" />

              <div className="staff-overlay">
                <span>Advisor</span>
                <h3>Michael</h3>
                <div className="plus">+</div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TeamMembers;