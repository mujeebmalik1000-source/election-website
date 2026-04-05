import React, { useState, useEffect } from "react";
import Home3Header from "./Home3Header";
import "./Home3.css";
import AboutSection from "./AboutSection";
import EventsSection from './EventsSection'
import HomeCountdown from "./HomeCountdown";
import HomeGallery from "./HomeGallery";
import HomeCovrage from "./HomeCovrage";
import TeamMembers from "./TeamMembers";
import HeroBanner from "./HeroBanner";
import FooterSection from "./FooterSection";

import img1 from "../images/slide3.jpg.jpeg";
import img2 from "../images/donate-bg.jpeg";

const Home3 = () => {
  const [index, setIndex] = useState(1);
  const [transition, setTransition] = useState(true);

  const slides = [
    {
      image: img1,
      title: "Life Without Liberty,\nAs Like Hell.",
      
      desc: "lorem It is a long established fact that a reader will be distracted by the readable."
    },
    {
      image: img2,
      title: "World Needs A Leader",
      desc: "lorem is a long established fact that a reader will be distracted by the readable content."
    }
  ];

  const extended = [slides[slides.length - 1], ...slides, slides[0]];

  const next = () => {
    if (transition) setIndex((prev) => prev + 1);
  };

  const prev = () => {
    if (transition) setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index === extended.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setTransition(false);
        setIndex(extended.length - 2);
      }, 700);
    }
  }, [index]);

  useEffect(() => {
    if (!transition) {
      setTimeout(() => setTransition(true), 50);
    }
  }, [transition]);

  return (

    <>
    <div className="home3-slider-viewport">
      <div
        className="home3-slider-track"
        style={{
          transform: `translateX(-${index * 100}%)`,
          transition: transition ? "transform 0.7s ease-in-out" : "none"
        }}
      >
        {extended.map((item, i) => (
          <div className="home3-single-slide" key={i}>
            <div
              className="home3-bg-img"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="home3-overlay-gradient"></div>
            </div>

            <div className="home3-slide-content">
              <h1 className="home3-heading">{item.title}</h1>
              <p className="home3-subtext">{item.desc}</p>
              <button className="home3-btn">JOIN THE CAMPAIGN</button>
            </div>
          </div>
        ))}
      </div>

      <div className="home3-arrow home3-left" onClick={prev}>
        &#8592;
      </div>
      <div className="home3-arrow home3-right" onClick={next}>
        &#8594;
      </div>
    </div>

    <Home3Header />
    <AboutSection />
    <EventsSection />
    <HomeCountdown />
    <HomeGallery />
    <HomeCovrage />
    <TeamMembers />
    <HeroBanner />
    <FooterSection />
    </>
  );
};

export default Home3;