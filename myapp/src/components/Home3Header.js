import React from "react";
import "./Home3Header.css";
import logoImg from "../images/2.logo-jpg.svg";  

const Home3Header = () => {
  return (
    <header className="home3-header">
      <div className="home3-header-container">

        {/* LOGO */}
        <div className="home3-logo">
             <img src={logoImg} alt="logo" />
        
        </div>

        {/* NAV */}
        <nav className="home3-nav">
          <a href="#">HOME</a>
          <a href="#">ABOUT US</a>
          <a href="#">EVENTS</a>
          <a href="#">PAGES</a>
          <a href="#">BLOG</a>
          <a href="#">CONTACT</a>
        </nav>

        {/* BUTTON */}
        <button className="home3-donate-btn">
          MAKE DONATION
        </button>

      </div>
    </header>
  );
};

export default Home3Header;