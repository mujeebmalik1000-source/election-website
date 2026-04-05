import React from "react";
import "./EventsSection.css";

import event1 from "../images/1.event.jp.jpg";
import event2 from "../images/2.event.jp.jpg";
import event3 from "../images/3.event.jp.jpg";

const EventsSection = () => {
  return (
    <section className="events-section">
      <div className="events-container">

        {/* LEFT CONTENT */}
        <div className="events-left">
          <p className="events-small">– Our Event's –</p>
          <h2>
            You Can Attend Our <br />
            Upcoming Events
          </h2>
          <div className="title-underline">
            <span className="red-line"></span>
            <span className="blue-line"></span>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="events-cards">

          <div className="event-card">
            <img src={event1} alt="event1" />
            <div className="event-content">
              <p className="location">📍 Cirantam's, Shiloh, Hawaii 8062, USA.</p>
              <h3>Letraset Sheets Passage And Recently.</h3>
              <div className="event-meta">
                <span>📅 July 1, 2023</span>
                <span>⏰ 15:00 - 19:00</span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <img src={event2} alt="event2" />
            <div className="event-content">
              <p className="location">📍 Cirantam's, Shiloh, Hawaii 8062, USA.</p>
              <h3>The Best Strategically Build Your Business Earning</h3>
              <div className="event-meta">
                <span>📅 July 2, 2023</span>
                <span>⏰ 10:00 - 15:00</span>
              </div>
            </div>
          </div>

          <div className="event-card">
            <img src={event3} alt="event3" />
            <div className="event-content">
              <p className="location">📍 Cirantam's, Shiloh, Hawaii 8062, USA.</p>
              <h3>Political Commitment For Your Deportation Issue</h3>
              <div className="event-meta">
                <span>📅 July 5, 2023</span>
                <span>⏰ 13:00 - 16:00</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EventsSection;