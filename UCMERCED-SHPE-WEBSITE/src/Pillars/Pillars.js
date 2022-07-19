import React, { useEffect } from "react";
import "./Pillars.css";
import Banner from "../assets/Nationals1.jpg";
import Familia from "../assets/SHPE-Familia.jpg";
import Academics from "../assets/SHPE-Academics.jpg";
import Professionalism from "../assets/SHPE-Professionalism.jpg";
import Networking from "../assets/SHPE-Networking.png";
import Outreach from "../assets/SHPE-Outreach1.png";

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
            <br></br>
            The purpose of this student chapter is to increase the number of
            Hispanic engineering students at the University of California
            Merced, promote the advancement of Hispanic engineers and scientists
            in employment and education, develop and participate in programs
            with industry and the university, which benefit students seeking
            technical degrees. Another goal we have is to improve the retention
            of Hispanic students enrolled in engineering and science.
          </p>
        </div>

        <div className="vision-container">
          <h2>Our Vision:</h2>
          <p>
            <br></br>
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
          <div className="fade-in-container">
            <div className="image-left-container">
              <img class="pillar-image" src={Familia} alt="Logo" />
            </div>

            <div className="text-right-container">
              <h2>Familia:</h2>
              <p>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <div className="fade-in-container">
            <div className="text-left-container">
              <h2>Academics:</h2>
              <p>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>

            <div className="image-right-container">
              <img class="pillar-image" src={Academics} alt="Logo" />
            </div>
          </div>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <div className="fade-in-container">
            <div className="image-left-container">
              <img class="pillar-image" src={Professionalism} alt="Logo" />
            </div>

            <div className="text-right-container">
              <h2>Professionalism:</h2>
              <p>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <div className="fade-in-container">
            <div className="text-left-container">
              <h2>Networking:</h2>
              <p>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>

            <div className="image-right-container">
              <img class="pillar-image" src={Networking} alt="Logo" />
            </div>
          </div>
        </div>
        <div data-Aos="fade-left" className="pillar-title">
          <div className="fade-in-container">
            <div className="image-left-container">
              <img class="pillar-image" src={Outreach} alt="Logo" />
            </div>

            <div className="text-right-container">
              <h2>Outreach:</h2>
              <p>
                <br></br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Another title</h2>
      </div>
    </div>
  );
};

export default Home;
