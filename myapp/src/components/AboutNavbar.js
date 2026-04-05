import React from "react";
import "./AboutNavbar.css";
import logo from "../images/2.logo-jpg.svg";
import { Link } from "react-router-dom";

function AboutNavbar() {
  return (
    <div className="about-navbar">

      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>

      <ul className="about-nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/aboutpage">ABOUT US</Link></li>
        <li><Link to="/eventpage">EVENTS</Link></li>
        <li><Link to="/pagespage">PAGES</Link></li>
        <li><Link to="/blogpage">BLOG</Link></li>
        <li><Link to="/contactpage">CONTACT</Link></li>
      </ul>

      <button className="donate-btn">MAKE DONATION</button>

    </div>
  );
}

export default AboutNavbar;