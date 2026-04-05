import React from 'react';
import './HomeCountdown.css';

const HomeCountdown = () => {
  return (
    <div className="home-countdown-section">
      <div className="gradient-overlay">
        <div className="countdown-content">
          <h1 className="event-title">Its Beginning! Aberdeen, Aberdeen City, Uk</h1>
          <p className="event-time">08:00 AM - 05:00 PM</p>
          
          <div className="timer-container">
            <div className="time-card">
              <h2 className="time-value">-447</h2>
              <span className="time-label">Days</span>
            </div>
            <div className="time-card">
              <h2 className="time-value">-13</h2>
              <span className="time-label">Hours</span>
            </div>
            <div className="time-card">
              <h2 className="time-value">-36</h2>
              <span className="time-label">Min</span>
            </div>
            <div className="time-card">
              <h2 className="time-value">-50</h2>
              <span className="time-label">Sec</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCountdown;