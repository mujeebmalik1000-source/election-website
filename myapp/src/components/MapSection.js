import React from "react";
import "./MapSection.css";

function MapSection() {
  return (
    <section className="map-section">
      <iframe
        title="google-map"
        src="https://www.google.com/maps?q=John+F.+Kennedy+International+Airport&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </section>
  );
}

export default MapSection;