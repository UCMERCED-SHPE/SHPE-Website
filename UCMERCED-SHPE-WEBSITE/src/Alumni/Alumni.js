import React from "react";
import "./Alumni.css";

import Banner from "../assets/SHPE_logo_horiz_UC Merced_CMYK.png"
import person from "../assets/suit_cartoon.jpg"

function Alumni() {
  return (
    <div className="Parent-Container">
      <h4>This is the Alumni page</h4>

      <div className="Wide-Picture">
        <img class="banner-image" src={Banner} alt="Logo" />
      </div>

      <div className="First-20XX-Year">
        <h2>20XX - 20XX Academic Year</h2>
      </div>

      <div className="Picture-Container">
        <div className="Picture-One">
          <img class="person1" src={person} alt="alumniOne" />
          <h3>Brandon Ortega</h3>
          <h4>President</h4>
        </div>

        <div className="Picture-Two">
          <img class="person1" src={person} alt="alumniOne" />
          <h3>Rodrigo Martinez</h3>
          <h4> Vice President</h4>
        </div>

        <div className="Picture-Three">
          <img class="person1" src={person} alt="alumniOne" />
          <h3>Axel Siliezar</h3>
          <h4>Secretary</h4>
        </div>
      </div>

      <div className="Second-20XX-Year">
        <h2>20XX - 20XX Academic Year</h2>
      </div>

      <div className="Picture-Container">
        <div className="Picture-One">
          <img class="person1" src={person} alt="alumniOne" />
          <h3>Brandon Ortega</h3>
          <h4>President</h4>
        </div>

        <div className="Picture-Two">
          <img class="person1" src={person} alt="alumniOne" />
          <h3>Rodrigo Martinez</h3>
          <h4> Vice President</h4>
        </div>

        <div className="Picture-Three">
          <img class="person1" src={person} alt="alumniOne" />
          <h3>Axel Siliezar</h3>
          <h4>Secretary</h4>
        </div>
      </div>

    </div>
  );
}

export default Alumni;

