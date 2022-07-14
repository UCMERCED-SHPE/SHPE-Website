import React, { useEffect } from "react";
import "./Home.css";
import Banner from "../assets/Nationals1.jpg";

import "aos/dist/aos.css";
import Aos from "aos";

//MOVE ALL CHANGES TO PILLARS.JS
const Home = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="parent-container">
      <div className="banner-container">
        <img class="banner-image" src={Banner} alt="Logo" />
      </div>

      <div className="mission-vision-container">
        <div className="mission-container">
          <h2>Our Mission </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.t
          </p>
        </div>

        <div className="vision-container">
          <h2>Our Vision:</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.t
          </p>
        </div>
      </div>

      <div className="pillar-container">
        <div data-Aos="fade-left" className="pillar-title">
          <h2>Familia</h2>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <h2>Academics</h2>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <h2>Professionalism</h2>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <h2>Networking</h2>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <h2>Outreach</h2>
        </div>
      </div>

      <div>
        <h2>Another title</h2>
      </div>
    </div>
  );
};

export default Home;
