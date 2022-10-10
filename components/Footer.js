import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      {/* elements */}
      <div className="section elements-container ">
        <div className="contact-elements md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-0">
          <div className="elm">
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>Emaiil address</h3>
            <a href="mailto:#">
              <h4>samuel@gmail.com</h4>
            </a>
          </div>
          <div className="elm">
            <div className="icon">
              <FaTelegramPlane />
            </div>
            <h3>Telegram</h3>
            <a href="mailto:#">
              <h4>@samuel</h4>
            </a>
          </div>
        </div>
      </div>

      <div className="footer-container max-w-full ">
        <div className="footer-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5 flex items-center justify-between flex-col gap-8 md:flex-row">
          <div>
            <a href="#top">
              <img src="/img/logo-dark.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="menu">
            <ul>
              <li>
                <a className="active" href="#top">
                  Home
                </a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#projects">Projets</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5 flex items-center justify-between flex-col-reverse gap-8 md:flex-row">
          <div>© 2022 Made from scratch by me</div>
          <div className="menu">
            <ul>
              <li>
                <a
                  href="https://twitter.com/SamuelAMZ0"
                  target="blank"
                  className="text-2xl"
                >
                  <FiTwitter />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/SamuelAMZ"
                  target="blank"
                  className="text-2xl"
                >
                  <FiGithub />
                </a>
              </li>
              <li>
                <a href="#" className="text-2xl">
                  <FiLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
