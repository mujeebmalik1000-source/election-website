import React from "react";
import "./ContactSection.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

function ContactSection() {
  return (
    <div className="contact-section">
      <div className="contact-container">

        <div className="contact-card">
          <div className="icon-box">
            <FaMapMarkerAlt />
          </div>
          <h3>Address</h3>
          <p>
            7 Green Lake Street <br/>
            <p>Crawfordsville, IN 47933</p>


          </p>
        </div>

        <div className="contact-card">
          <div className="icon-box">
            <FaEnvelope />
          </div>
          <h3>Email Us</h3>
          <p>Election@gmail.com</p>
          <p>helloyou@gmail.com</p>
        </div>

        <div className="contact-card">
          <div className="icon-box">
            <FaPhoneAlt />
          </div>
          <h3>Call Now</h3>
          <p>+1 800 123 456 789</p>
          <p>+1 800 123 654 987</p>
        </div>

      </div>
    </div>
  );
}

export default ContactSection;