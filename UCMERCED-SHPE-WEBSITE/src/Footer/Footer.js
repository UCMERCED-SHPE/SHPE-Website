import "./Footer.css";
import React from "react";
import Logo from "../assets/SHPE_logo_horiz_UC Merced_DKBG.png";
import Bobcat from "../assets/bobcat-icon.png";
import Facebook from "../assets/facebook-icon.png";
import Instagram from "../assets/instagram-icon.png";
import LinkedIn from "../assets/linkedin-icon.png";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-image">
        <img class="primary-logo" src={Logo} alt="Logo" />
      </div>
      <div className="info-container">
        <div className="footer">
          <div className="footer-info">
            <h2>iushpe@ucmerced.edu </h2>
          </div>
        </div>
        <div className="social-media">
          <div className="logo">
            <a href="https://ucmerced.presence.io/organization/shpe-at-uc-merced/">
              <img class="bobcat-icon" src={Bobcat} alt="Catlife" />
            </a>
          </div>
          <div className="logo">
            <a href="https://www.facebook.com/groups/194908704010085/about/">
              <img class="facebook-icon" src={Facebook} alt="Facebook" />
            </a>
          </div>
          <div className="logo">
            <a href="https://www.instagram.com/ucm_shpe/">
              <img class="instagram-icon" src={Instagram} alt="Instagram" />
            </a>
          </div>
          <div className="logo">
            <a href="https://www.linkedin.com/company/shpe-at-uc-merced">
              <img class="linkedin-icon" src={LinkedIn} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
