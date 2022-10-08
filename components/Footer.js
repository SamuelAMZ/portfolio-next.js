import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-container max-w-full ">
      <div className="footer-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-5 xl:px-0 flex items-center justify-between flex-col gap-8 md:flex-row">
        <div>
          <img src="/img/logo.png" alt="logo" className="logo" />
        </div>
        <div className="menu">
          <ul>
            <li>
              <a className="active" href="#">
                Home
              </a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Projets</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-5 xl:px-0 flex items-center justify-between flex-col-reverse gap-8 md:flex-row">
        <div>© 2022 Made from scratch by me</div>
        <div className="menu">
          <ul>
            <li>
              <a href="#" className="text-2xl">
                <FiTwitter />
              </a>
            </li>
            <li>
              <a href="#" className="text-2xl">
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
  );
};

export default Footer;
