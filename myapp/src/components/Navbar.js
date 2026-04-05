import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../images/logo-1.svg";
import { Link } from "react-router-dom";

function Navbar() {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <img src={logo} alt="Logo" />

      <ul className="nav-links">

        <li className="dropdown">
          <Link to="/">HOME</Link>

          <ul className="dropdown-menu">
            <li><Link to="/">HOME STYLE 1</Link></li>
            <li><Link to="/home2">HOME STYLE 2</Link></li>
            <li><Link to="/home3">HOME STYLE 3</Link></li>
            <li><Link to="/">HOME STYLE 4</Link></li>
          </ul>
        </li>

        <li><Link to="/about">ABOUT US</Link></li>
        <li><Link to="/eventpage">EVENTS</Link></li>
        <li><Link to="/pagespage">PAGES</Link></li>
        <li><Link to="/blogpage">BLOG</Link></li>
        <li><Link to="/contactpage">CONTACT</Link></li>
      </ul>

      <button className="donate-btn">MAKE DONATION</button>
    </div>
  );
}

export default Navbar;



