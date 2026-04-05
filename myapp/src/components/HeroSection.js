import React, { useState, useEffect } from "react";
import "./HeroSection.css";

import slide1 from "../images/slide1.jpg.jpeg";
import slide2 from "../images/slide2.jpg.jpeg";
import slide3 from "../images/slide3.jpg.jpeg";

const slides = [
  {
    image: slide1,
    title: "Life Without Liberty, As Like Hell.",
    text: "Lorem Ipsum has been the industry's standard dummy text ever since."
  },
  {
    image: slide2,
    title: "Together We Build A Better Nation.",
    text: "Working together for justice and equality."
  },
  {
    image: slide3,
    title: "Your Voice Matters For Future.",
    text: "Join the campaign and support people's rights."
  }
];

function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [showBtn, setShowBtn] = useState(false);

  // 🔥 scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // 🔥 next/prev slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // 🔥 scroll detect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="hero">

        <div
          className="slider"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div className="slide" key={index}>
              <img src={slide.image} alt="slide" />
              <div className="overlay"></div>

              <div className="hero-content">
                <h1>{slide.title}</h1>
                <p>{slide.text}</p>
                <button className="hero-btn">JOIN THE CAMPAIGN</button>
              </div>
            </div>
          ))}
        </div>

        {/* arrows */}
        <div className="arrow left" onClick={prevSlide}>❮</div>
        <div className="arrow right" onClick={nextSlide}>❯</div>

      </section>

      {/* 🔥 SCROLL BUTTON (IMPORTANT: HERO KE BAHAR) */}
      {showBtn && (
        <div className="scroll-btn" onClick={scrollToTop}>
          ↑
        </div>
      )}
    </>
  );
}

export default HeroSection;


// import React, { useState } from "react";
// import "./HeroSection.css";

// import slide1 from "../images/slide1.jpg.jpeg";
// import slide2 from "../images/slide2.jpg.jpeg";
// import slide3 from "../images/slide3.jpg.jpeg";

// const slides = [
//   {
//     image: slide1,
//     title: "Life Without Liberty, As Like Hell.",
//     text: "Lorem Ipsum has been the industry's standard dummy text ever since."
//   },
//   {
//     image: slide2,
//     title: "Together We Build A Better Nation.",
//     text: "Working together for justice and equality."
//   },
//   {
//     image: slide3,
//     title: "Your Voice Matters For Future.",
//     text: "Join the campaign and support people's rights."
//   }
// ];

// function HeroSection() {

//   const [current, setCurrent] = useState(0);

 

//   const nextSlide = () => {
//     setCurrent((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   };

 

//   return (
//     <section className="hero">

//       <div
//         className="slider"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >

//         {slides.map((slide, index) => (
//           <div className="slide" key={index}>

//             <img src={slide.image} alt="slide" />

//             <div className="overlay"></div>

//             <div className="hero-content">
//               <h1>{slide.title}</h1>
//               <p>{slide.text}</p>
//               <button className="hero-btn">JOIN THE CAMPAIGN</button>
//             </div>

//           </div>
//         ))}

//       </div>

//       <div className="arrow left" onClick={prevSlide}>❮</div>
//       <div className="arrow right" onClick={nextSlide}>❯</div>

     

//     </section>
//   );
// }

// export default HeroSection;

