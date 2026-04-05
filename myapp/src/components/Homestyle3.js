import React from "react";
import "./Homestyle3.css";
import aboutImg from "../images/1.cap-jp.jpg";

const Homestyle3 = () => {
  return (
    <section className="politician-section">
      <div className="politician-container">

        {/* LEFT IMAGE */}
        <div className="politician-img">
          <img src={aboutImg} alt="about" />
        </div>

        {/* RIGHT TEXT */}
        <div className="politician-text">

          <span className="politician-small">About Politician</span>

          <h2>
            We raise voice for <br />
            people rights <span>&</span> provide rights.
          </h2>

          <p>
            Aliquam erat volutpat. Which the kind and policies are designed to support
            people and to the for ensure equal opportunities for everyone in society.
            Duis ac turpis at sapien facilisis tincidunt. Integer rutrum ante eu lacus  people and to the for ensure equal opportunities for everyone in society.
            Duis ac turpis at sapien facilisis tincidunt. Integer rutrum ante eu lacus.
          </p>

          <button className="politician-btn">
            More About Us
          </button>

        </div>

      </div>
    </section>
  );
};

export default Homestyle3;