import React, { useState } from "react";
import myImage from "./logo1.png";
import myImageHover from "./logo2.png";

export default function Navbar(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <img
            className="navbar_image"
            src={isHovered ? myImageHover : myImage}
            alt="Logo"
            style={{ width: "70px", height: "70px", paddingLeft: "10px" }}
          />
        </div>
        <a className="navbar-brand" href="#">
          <span
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            Sriharsha Vadavalli
          </span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#About">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Skills">
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Get In Touch
              </a>
            </li>
            {/* <li className="nav-item">
            <button type="button" class="btn btn-outline-dark">Dark</button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
