import React, { useState } from "react";
import myImage from "./mainlogo.jpg"; // Import your image file

export default function Maincontent() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="Maincontent">
      <div className="content">
        <div className="mainlogo">
          <img
            src={myImage}
            alt="Logo"
            style={{ width: "512px", height: "512px", marginBottom: "45px" }}
          />
        </div>
        <div className="description">
          <div
            className="typewriter-hello"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1>
              <b
                style={{
                  color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
                }}
              >
                {isHovered ? "Namaste!" : "Hello!"}
              </b>
            </h1>
          </div>
          <div className="aboutme">
            <h1
              style={{
                color: isHovered ? "rgb(247, 111, 8)" : "rgb(13, 222, 13)",
              }}
            >
              Myself Harsha, 🧑🏻‍🦰 💻
            </h1>
            <h1 aria-label="Hi! I'm a developer">
              I'm a&nbsp;<span className="typewriter"></span>
            </h1>
            <h1 className="hyd">I'm based in Hyderabad, 🇮🇳</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
