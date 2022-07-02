import "./Navbar.css";
import React from "react";
//Currently looking into Navlinks from react-router-dom
import Logo from "../assets/SHPE_logo_horiz_UC Merced_DKBG.png";

function Navbar() {
  return (
    <nav class="navbar">
      <div class="logo">
        <a href="www.google.com">
          <img class="primary-logo" src={Logo} alt="Logo" />
        </a>
      </div>
      <ul class="nav-links">
        <li class="link-item">
          <a href="www.google.com">Home</a>
        </li>
        <li class="link-item">
          <a href="www.google.com">About Us</a>
        </li>
        <li class="link-item">
          <a href="www.google.com">Alumni</a>
        </li>
        <li class="link-item">
          <a href="www.google.com">Join</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
