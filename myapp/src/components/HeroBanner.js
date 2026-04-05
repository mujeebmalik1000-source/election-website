import React from "react";
import "./HeroBanner.css";

const HeroBanner = () => {
  return (
    <section className="wpo-cta-section">
      <div className="container">
        <div className="wpo-cta-wrap">

          <div className="wpo-cta-item">

            <div className="wpo-cta-text">
              <span>WE ARE HERE</span>
              <h2>Let’s fight with all injustice and corruption.</h2>
            </div>

            <div className="wpo-cta-btn">
              <a href="/contact">Call us</a>
            </div>

            <div className="cta-shape">
              <svg
                width="325"
                height="267"
                viewBox="0 0 325 267"
                preserveAspectRatio="xMidYMid meet"
              >
                <g transform="translate(0,267) scale(0.1,-0.1)" stroke="none">
                  <path d="M0 1332 l0 -1332 920 0 919 0 39 53 c213 291 233 519 64 720 -101 119 -201 194 -617 462 -344 222 -452 297 -605 426 -320 268 -528 547 -676 906 -20 48 -38 90 -40 92 -2 2 -4 -595 -4 -1327z" />
                </g>
              </svg>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroBanner;