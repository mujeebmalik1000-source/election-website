import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUp } from "lucide-react";
import "./Home2.css";
import AboutNavbar from "./AboutNavbar";
import Homestyle3 from "./Homestyle3";
import Homestyle4 from "./Homestyle4";
import EventsSection from "./EventsSection";
import HomeCountdown from "./HomeCountdown";
import MissionSection from "./MissionSection";
import HomeCovrage from "./HomeCovrage";
import BlogSection from "./blogSection";
import FooterSection from "./FooterSection";
import flagImg from "../images/1.fag-jp.avif";
import homeImg from "../images/1.home-png.png";
import img2 from "../images/2.homejpg.jpg";




const slides = [
  {
    id: 1,
    subtitle: "WE ARE AWESOME!",
    title: "Let's Make USA Great Again",
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the scrambled it to make.",
    image: homeImg,
      
  },
  {
    id: 2,
    subtitle: "WE ARE AWESOME!",
    title: "World Needs A Leader",
    description:
      "Empowering the next generation with values and vision to change the world around them.",
      image: img2, 
    
     
  },
];

const Home2 = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <>
      {/* HERO SLIDER */}
      <div className="home-container">

        {/* ✅ NAVBAR TOP PE */}
        <AboutNavbar />

       <div
         className="usa-flag-bg"
         style={{
          backgroundImage: `url(${flagImg})`,
           backgroundSize: "cover",
            backgroundPosition: "center",
           }}
        ></div>

        <div className="overlay-shade"></div>

        <div className="content-box">
          <AnimatePresence mode="wait">
            <div className="layout-grid" key={index}>
              
              {/* TEXT */}
              <motion.div
                className="text-part"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -800, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="top-title">
                  {slides[index].subtitle}
                </span>

                <h1 className="hero-heading">
                  {slides[index].title}
                </h1>

                <p className="hero-text">
                  {slides[index].description}
                </p>

                <button className="exp-btn">Explore More</button>
              </motion.div>

              {/* IMAGE */}
              <motion.div
                className="image-part"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 800, opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="brush-circle">
                  <img
                    src={slides[index].image}
                    alt="leader"
                    className="main-img"
                  />
                </div>
              </motion.div>

            </div>
          </AnimatePresence>
        </div>

        {/* ARROWS */}
        <button className="nav-arrow left" onClick={prevSlide}>
          <ChevronLeft size={24} />
        </button>

        <button className="nav-arrow right" onClick={nextSlide}>
          <ChevronRight size={24} />
        </button>

      </div> 



      {/* OTHER SECTIONS */}
      <Homestyle3 />
      <Homestyle4 />
      <EventsSection />
      <HomeCountdown />
      <MissionSection />
      <HomeCovrage />
      <BlogSection />
      <FooterSection />
    </>
  );
};

export default Home2;




