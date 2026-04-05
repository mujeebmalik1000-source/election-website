import React from 'react';
import './HomeGallery.css';

// ✅ Images import
import img1 from "../images/card1.jpg";
import img2 from "../images/card2.jpg";
import img3 from "../images/card3.jpg";
import img4 from "../images/card4.jpg";
import img5 from "../images/card5.jpg";
import img6 from "../images/card6.jpg";
import img7 from "../images/card7.jpg";
import img8 from "../images/card8.jpg";
import img9 from "../images/15.jpg.jpeg";

const HomeGallery = () => {

  const galleryImages = [
    img1, img2, img3,
    img4, img5, img6,
    img7, img8, img9
  ];

  return (
    <div className="home-gallery-wrapper">

      {/* HEADER */}
      <div className="gallery-header">
        <p className="subtitle">- Gallery -</p>
        <h2 className="main-title">Awesome Gallery Photo.</h2>
      </div>

      {/* GALLERY */}
      <div className="gallery-container">
        <div className="image-grid">
          {galleryImages.map((src, index) => (
            <div key={index} className="image-card">

              <img src={src} alt={`Gallery ${index}`} />

              {/* HOVER OVERLAY */}
              <div className="overlay">
                <span className="plus-icon">+</span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomeGallery;