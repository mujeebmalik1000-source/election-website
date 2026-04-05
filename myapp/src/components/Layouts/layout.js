import React from "react";
import { Outlet, Link } from "react-router-dom";


function Layout() {
  return (
    <>
      
      {/* <nav>
        <Link to="/">Home</Link>
        <Link to="/aboutpage">About Us</Link>
        <Link to="/contactpage">Contact Us</Link>
      </nav>

      <hr /> */}

  
      <Outlet />
    </>
  );
}

export default Layout;

