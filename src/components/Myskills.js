import React, { useState } from "react";
import css from "./css.png";
import cpp from "./cpp.png";
import python from "./python.png";
import html from "./html.png";
import js from "./js.png";
import node from "./node.png";
import mdb from "./mdb.png";
import react from "./react.png";

export default function MySkills() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div id="Skills">
      <div className="skills-title">
        <div className="skills-image">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xmlSpace="preserve"
            width="72"
            height="72"
          >
            <circle style={{ fill: "#324A5E" }} cx="256" cy="256" r="256" />
            <path
              style={{ fill: "#2B3B4E" }}
              d="M509.64,290.766l-59.444-59.444l-16.653,17.161l-60.235-60.235l-28.817-6.952l-33.244,21.282 l50.728,50.728l-39.671,0.35L190.34,121.691l-25.566,3.434l-14.932,36.466l92.77,92.77L56.889,256l120.172,120.172l-34.838,22.05 L256,512l0,0C385.591,512,492.675,415.703,509.64,290.766z"
            />
            <path
              style={{ fill: "#EAA22F" }}
              d="M440.385,284.444H113.778v-56.889h326.608c8.132,0,14.726,6.592,14.726,14.726v27.439 C455.111,277.852,448.517,284.444,440.385,284.444z"
            />
            <path
              style={{ fill: "#E09112" }}
              d="M113.778,255.569v28.875h326.608c8.132,0,14.726-6.592,14.726-14.726v-14.15H113.778z"
            />
            <rect
              x="113.778"
              y="227.556"
              style={{ fill: "#31BAFD" }}
              width="302.839"
              height="56.889"
            />
            <rect
              x="113.778"
              y="256"
              style={{ fill: "#2B9ED8" }}
              width="302.839"
              height="28.444"
            />
            <polygon
              style={{ fill: "#FEE187" }}
              points="113.778,227.556 56.889,256 113.778,284.444 "
            />
            <polygon
              style={{ fill: "#FFC61B" }}
              points="57.751,255.569 56.889,256 113.778,284.444 113.778,255.569 "
            />
            <polygon
              style={{ fill: "#59595B" }}
              points="56.889,256 83.466,269.288 83.466,242.712 "
            />
            <polygon
              style={{ fill: "#272525" }}
              points="57.751,255.569 56.889,256 83.466,269.288 83.466,255.569 "
            />
            <circle
              style={{ fill: "#FFFFFF" }}
              cx="170.667"
              cy="142.222"
              r="28.444"
            />
            <path
              style={{ fill: "#D0D1D3" }}
              d="M170.667,113.778c-0.193,0-0.381,0.026-0.574,0.029v56.83c0.191,0.003,0.379,0.029,0.574,0.029 c15.71,0,28.444-12.734,28.444-28.444S186.375,113.778,170.667,113.778z"
            />
            <rect
              x="142.222"
              y="312.889"
              style={{ fill: "#FFC61B" }}
              width="85.333"
              height="85.333"
            />
            <rect
              x="184.32"
              y="312.889"
              style={{ fill: "#EAA22F" }}
              width="43.236"
              height="85.333"
            />
            <polygon
              style={{ fill: "#FFFFFF" }}
              points="311.249,202.578 329.871,141.667 373.31,188.249 "
            />
            <polygon
              style={{ fill: "#D0D1D3" }}
              points="329.871,141.667 329.723,142.152 343.724,195.081 373.31,188.249 "
            />
          </svg>
        </div>
        <div className="skills-heading">
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {" "}
            <b> My Skills</b>
            {/* <a href="#Maincontent" className="nav-link">
              ☝️
            </a> */}
          </h1>
        </div>
      </div>
      <div className="techskills">
        <div className="skillstech">
          <h1>Technical</h1>
        </div>
        <div className="skillpngs">
          <img
            src={css}
            alt="CSS Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={python}
            alt="Python Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={cpp}
            alt="C++ Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={html}
            alt="HTML Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={js}
            alt="JavaScript Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={node}
            alt="Node.js Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={mdb}
            alt="MongoDB Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
          <img
            src={react}
            alt="React Logo"
            style={{ width: "72px", height: "72px", marginBottom: "45px" }}
          />
        </div>
      </div>
      <div className="overallskills">
        <div className="overallhead">
          <h1>Overall</h1>
        </div>
        <div className="interskills">
          <p>
            <br />
            In the ever-evolving world of work, I take pride in my distinctive
            set of skills, blending soft abilities and technical know-how. A key
            pillar of my strengths lies in{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              Team Management
            </strong>
            , where my leadership style fosters collaboration, motivates team
            members, and ensures efficient resource allocation.
            <br />
            <br />
            Complementing my proficiency in team dynamics is my strong suit in{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              Critical Thinking
            </strong>
            . This skill is my compass in navigating complex challenges, aiding
            me in making informed decisions and identifying optimal solutions.
            <br />
            <br />
            My technical expertise spans across a spectrum of{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              coding languages
            </strong>
            . From the foundational languages like{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              C, C++, and Java
            </strong>{" "}
            to the dynamic and widely used ones like{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              Python, JavaScript, HTML, and CSS
            </strong>
            , I've cultivated a versatile coding repertoire.
            <br />
            <br />
            Delving further into the technical realm, my proficiency extends to
            web development frameworks like{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              Django
            </strong>{" "}
            and databases such as{" "}
            <strong
              style={{
                color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
              }}
            >
              MongoDB
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
