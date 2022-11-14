import React, { useEffect, useState } from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";
import { FaEnvelope, FaTelegramPlane } from "react-icons/fa";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const Footer = () => {
  const [isSubPage, setIsSubPage] = useState(false);
  const router = useRouter();

  // get if page is a parent page or a subpage
  useEffect(() => {
    if (router.pathname !== "/") {
      setIsSubPage(true);
    } else if (router.pathname === "/") {
      setIsSubPage(false);
    } else {
      setIsSubPage(true);
    }
  }, []);

  return (
    <>
      {/* elements */}
      <div className="section elements-container ">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="contact-elements md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-0"
        >
          <div className="elm">
            <div className="icon">
              <FaEnvelope />
            </div>
            <h3>Emaiil address</h3>
            <a href="mailto:samueldevpro09@gmail.com">
              <h4>samueldevpro09@gmail.com</h4>
            </a>
          </div>
          <div className="elm">
            <div className="icon">
              <FaTelegramPlane />
            </div>
            <h3>Telegram</h3>
            <a href="https://t.me/sam_dev09">
              <h4>@sam_dev09</h4>
            </a>
          </div>
        </motion.div>
      </div>

      <div className="footer-container max-w-full ">
        <div className="footer-content md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5 flex items-center justify-between flex-col gap-8 md:flex-row">
          <div>
            <Link href={"/#"}>
              <a>
                <img src="/img/logo-dark.png" alt="logo" className="logo" />
              </a>
            </Link>
          </div>
          <div className="menu">
            {isSubPage ? (
              <ul>
                <li>
                  <Link href="/#top">
                    <a className="active">Home</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    <a>About</a>
                  </Link>
                </li>
                <li>
                  <Link href="/#projects">
                    <a>Projets</a>
                  </Link>
                </li>
                <li>
                  {/* <Link href="/#blog">
                    <a>Blog</a>
                  </Link> */}
                </li>
              </ul>
            ) : (
              <ul>
                <li>
                  <a href="/#top" className="active">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/#about">About</a>
                </li>
                <li>
                  <a href="/#projects">Projets</a>
                </li>
                {/* <li>
                  <a href="/#blog">Blog</a>
                </li> */}
              </ul>
            )}
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
