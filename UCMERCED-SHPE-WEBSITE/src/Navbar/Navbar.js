import "./Navbar.css";
import React from "react";
//Currently looking into Navlinks from react-router-dom
import Logo from "../assets/SHPE_logo_horiz_UC Merced_DKBG.png";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo">
        <a href="www.google.com">
          <Link to="/">
            <img class="primary-logo" src={Logo} alt="Logo" />
          </Link>
        </a>
      </div>
      <ul class="nav-links">
        <li class="link-item">
          <Link to="/">Home</Link>
        </li>
        <li class="link-item">
          <div class="dropdown">
            <button class="dropbtn">About Us
              <i class="fa fa-caret-down" aria-hidden="true"></i>
            </button>
            <div class= "dropdown-content">
              <Link className="Links" to="/values">Values</Link>
              <Link className="Links" to="/initiatives">Initiatives</Link>
              <Link className="Links" to="/eboard">EBoard</Link>
              <Link className="Links" to="Alumni">Alumni</Link>
            </div>
          </div>
        </li>
        <li class="link-item">
          <Link to="/join">Join</Link>
        </li>
        <li class="link-item">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
