import React from "react";
import {
  ArrowRight,
  Megaphone,
  Mail,
  MessageCircle,
  ThumbsUp,
  Users,
  HandHeart,
} from "lucide-react";
import "./Homestyle4.css";

function Homestyle4() {
  return (
    <section className="donation-section">
      <div className="donation-container">

        {/* BLUE CARD */}
        <div className="donation-card blue-card">
          <div className="icon-circle multi-icon">
            <Megaphone />
            <Mail />
            <MessageCircle />
            <ThumbsUp />
          </div>

          <h2>OUR CAMPAIGN</h2>

          <p>
            Lorem Ipsum has been the industry's standard dummy of the text ever
            since the scrambled it to make.
          </p>

          <div className="circle-btn">
            <ArrowRight />
          </div>
        </div>

        {/* GREEN CARD */}
        <div className="donation-card green-card">
          <div className="icon-circle">
            <Users />
          </div>

          <h2>BECOME A VOLUNTEER</h2>

          <p>
            Lorem Ipsum has been the industry's standard dummy of the text ever
            since the scrambled it to make.
          </p>

          <div className="circle-btn">
            <ArrowRight />
          </div>
        </div>

        {/* RED CARD */}
        <div className="donation-card red-card">
          <div className="icon-circle">
            <HandHeart />
          </div>

          <h2>MAKE DONATION</h2>

          <p>
            Lorem Ipsum has been the industry's standard dummy of the text ever
            since the scrambled it to make.
          </p>

          <div className="circle-btn">
            <ArrowRight />
          </div>
        </div>

      </div>
    </section>
  );
}

export default Homestyle4;