import React, { useState } from "react";

export default function Contact() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="contact-whole" id="Contact">
      <div className="contact-title">
        <div className="contact-image">
          {/* Replace the SVG here */}
          <svg
            width="80px"
            height="80px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <title>contact-details-filled</title>
            <g
              id="Page-1"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="icon"
                fill="#000000"
                transform="translate(42.666667, 85.333333)"
              >
                <path
                  d="M426.666667,1.42108547e-14 L426.666667,341.333333 L3.55271368e-14,341.333333 L3.55271368e-14,1.42108547e-14 L426.666667,1.42108547e-14 Z M362.666667,213.333333 L234.666667,213.333333 L234.666667,245.333333 L362.666667,245.333333 L362.666667,213.333333 Z M125.333333,155.733333 L109.333333,155.733333 C78.4053873,155.733333 53.3333333,181.333333 53.3333333,213.333333 L53.3333333,213.333333 L181.333333,213.333333 C181.333333,181.333333 156.16,155.733333 125.333333,155.733333 L125.333333,155.733333 Z M362.666667,149.333333 L234.666667,149.333333 L234.666667,181.333333 L362.666667,181.333333 L362.666667,149.333333 Z M117.333333,78.62624 C101.86936,78.62624 89.3333333,91.162267 89.3333333,106.62624 C89.3333333,122.090213 101.86936,134.62624 117.333333,134.62624 C132.797306,134.62624 145.333333,122.090213 145.333333,106.62624 C145.333333,91.162267 132.797306,78.62624 117.333333,78.62624 Z M362.666667,85.3333333 L234.666667,85.3333333 L234.666667,117.333333 L362.666667,117.333333 L362.666667,85.3333333 Z"
                  id="Combined-Shape"
                />
              </g>
            </g>
          </svg>
          {/* End of replaced SVG */}
        </div>
        <div className="contacts-heading">
          <h1
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              color: isHovered ? "rgb(13, 222, 13)" : "rgb(247, 111, 8)",
            }}
          >
            {" "}
            <b> Get In Touch</b>
          </h1>
        </div>
      </div>
      <div className="contactlinks">
        <a href="https://github.com/HarVad-1" className="firstlink">
          <svg
            width="72px"
            height="72px"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.49936 0.850006C3.82767 0.850006 0.849976 3.8273 0.849976 7.50023C0.849976 10.4379 2.75523 12.9306 5.39775 13.8104C5.73047 13.8712 5.85171 13.6658 5.85171 13.4895C5.85171 13.3315 5.846 12.9135 5.84273 12.3587C3.99301 12.7604 3.60273 11.4671 3.60273 11.4671C3.30022 10.6988 2.86423 10.4942 2.86423 10.4942C2.26044 10.0819 2.90995 10.0901 2.90995 10.0901C3.57742 10.137 3.9285 10.7755 3.9285 10.7755C4.52167 11.7916 5.48512 11.4981 5.86396 11.3279C5.92438 10.8984 6.09625 10.6053 6.28608 10.4391C4.80948 10.2709 3.25695 9.70063 3.25695 7.15241C3.25695 6.42615 3.51618 5.83298 3.94157 5.368C3.87299 5.1998 3.64478 4.52375 4.00689 3.60807C4.00689 3.60807 4.56494 3.42926 5.83538 4.28941C6.36568 4.14204 6.93477 4.06856 7.50018 4.0657C8.06518 4.06856 8.63386 4.14204 9.16498 4.28941C10.4346 3.42926 10.9918 3.60807 10.9918 3.60807C11.3548 4.52375 11.1266 5.1998 11.0584 5.368C11.4846 5.83298 11.7418 6.42615 11.7418 7.15241C11.7418 9.70716 10.1868 10.2693 8.70571 10.4338C8.94412 10.6392 9.15681 11.045 9.15681 11.6655C9.15681 12.5542 9.14865 13.2715 9.14865 13.4895C9.14865 13.6675 9.26867 13.8745 9.60588 13.8095C12.2464 12.9282 14.15 10.4375 14.15 7.50023C14.15 3.8273 11.1723 0.850006 7.49936 0.850006Z"
              fill="#000000"
            />
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/sriharsha-vadavalli-655968230/">
          <svg
            width="60px"
            height="60px"
            viewBox="0 0 256 256"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none">
              <path
                d="M0 18.338C0 8.216 8.474 0 18.92 0h218.16C247.53 0 256 8.216 256 18.338v219.327C256 247.79 247.53 256 237.08 256H18.92C8.475 256 0 247.791 0 237.668V18.335z"
                fill="#069"
              />
              <path
                d="M77.796 214.238V98.986H39.488v115.252H77.8zM58.65 83.253c13.356 0 21.671-8.85 21.671-19.91-.25-11.312-8.315-19.915-21.417-19.915-13.111 0-21.674 8.603-21.674 19.914 0 11.06 8.312 19.91 21.169 19.91h.248zM99 214.238h38.305v-64.355c0-3.44.25-6.889 1.262-9.346 2.768-6.885 9.071-14.012 19.656-14.012 13.858 0 19.405 10.568 19.405 26.063v61.65h38.304v-66.082c0-35.399-18.896-51.872-44.099-51.872-20.663 0-29.738 11.549-34.78 19.415h.255V98.99H99.002c.5 10.812-.003 115.252-.003 115.252z"
                fill="#ffffff"
              />
            </g>
          </svg>
        </a>
        <a href={require('./resume.pdf')}>
          <svg
            width="60px"
            height="60px"
            fill="#000000"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 480 480"
            // xml:space="preserve"
          >
            <g>
              <g>
                <path d="M413.648,74.336L341.664,2.352C340.216,0.896,338.216,0,336,0H104C81.944,0,64,17.944,64,40v344c0,22.056,17.944,40,40,40 h88v56h16v-56h120c4.416,0,8-3.576,8-8v-40c0-14.88,10.216-27.432,24-30.984V416v64h16v-56c22.056,0,40-17.944,40-40V80 C416,77.784,415.104,75.784,413.648,74.336z M344,27.312L388.688,72H344V27.312z M400,384c0,13.232-10.768,24-24,24v-72 c0-4.424-3.584-8-8-8c-26.472,0-48,21.528-48,48v32H104c-13.232,0-24-10.768-24-24V40c0-13.232,10.768-24,24-24h224v64 c0,4.424,3.584,8,8,8h64V384z" />
              </g>
            </g>
            <g>
              <g>
                <path d="M224,48H112c-4.416,0-8,3.576-8,8v112c0,4.424,3.584,8,8,8h32h48h32c4.416,0,8-3.576,8-8V56C232,51.576,228.416,48,224,48 z M184,160h-32v-16c0-8.824,7.176-16,16-16c8.824,0,16,7.176,16,16V160z M160,104c0-4.416,3.592-8,8-8s8,3.584,8,8s-3.592,8-8,8 S160,108.416,160,104z M216,160h-16v-16c0-10.488-5.136-19.72-12.952-25.56c3.064-4.032,4.952-9,4.952-14.44 c0-13.232-10.768-24-24-24s-24,10.768-24,24c0,5.44,1.888,10.408,4.952,14.44C141.136,124.28,136,133.512,136,144v16h-16V64h96 V160z" />
              </g>
            </g>
            <g>
              <g>
                <rect x="248" y="72" width="40" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="248" y="104" width="48" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="312" y="104" width="40" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="248" y="136" width="104" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="144" y="200" width="64" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="224" y="200" width="48" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="288" y="200" width="80" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="112" y="232" width="64" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="192" y="232" width="128" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="336" y="232" width="32" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="112" y="264" width="32" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="160" y="264" width="96" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="272" y="264" width="96" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="112" y="296" width="32" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="160" y="296" width="96" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="272" y="296" width="96" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="112" y="328" width="72" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="200" y="328" width="112" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="112" y="360" width="32" height="16" />
              </g>
            </g>
            <g>
              <g>
                <rect x="160" y="360" width="136" height="16" />
              </g>
            </g>
          </svg>
        </a>
      </div>
      <div className="contactsgap">
        <h1></h1>
      </div>
    </div>
  );
}
