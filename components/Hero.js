import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="hero-grid md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5 ">
      <div className=" w-full">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hero-text-wrapper"
        >
          <h1>HELLO, SAM HERE.</h1>
          <div className="header-icon-wrapper">
            <h1>A MODERN</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.4286 0H18.5714V12.6506L13.8324 0.921164L11.1833 1.99147L16.0451 14.0248L6.86802 4.8477L4.84772 6.86802L13.6435 15.6638L2.24482 10.6836L1.10092 13.3018L13.1621 18.5714H0V21.4286H13.1621L1.10092 26.6982L2.24482 29.3164L13.6435 24.3362L4.84772 33.132L6.86802 35.1522L16.0451 25.9752L11.1833 38.0086L13.8324 39.0788L18.5714 27.3494V40H21.4286V27.3494L26.1676 39.0788L28.8166 38.0086L23.955 25.9752L33.132 35.1522L35.1522 33.132L26.3564 24.3362L37.7552 29.3164L38.899 26.6982L26.838 21.4286H40V18.5714H26.8378L38.899 13.3018L37.7552 10.6836L26.3564 15.6638L35.1522 6.868L33.132 4.8477L23.955 14.0248L28.8166 1.99147L26.1676 0.921164L21.4286 12.6506V0Z"
                fill="#0000ff"
              />
            </svg>
            <h1>FULLSTACK</h1>
          </div>
          <h1>
            WEB <span>DEVELOPER</span>
          </h1>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="header-detail-wrapper"
        >
          <h5>FRONTEND</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.4286 0H18.5714V12.6506L13.8324 0.921164L11.1833 1.99147L16.0451 14.0248L6.86802 4.8477L4.84772 6.86802L13.6435 15.6638L2.24482 10.6836L1.10092 13.3018L13.1621 18.5714H0V21.4286H13.1621L1.10092 26.6982L2.24482 29.3164L13.6435 24.3362L4.84772 33.132L6.86802 35.1522L16.0451 25.9752L11.1833 38.0086L13.8324 39.0788L18.5714 27.3494V40H21.4286V27.3494L26.1676 39.0788L28.8166 38.0086L23.955 25.9752L33.132 35.1522L35.1522 33.132L26.3564 24.3362L37.7552 29.3164L38.899 26.6982L26.838 21.4286H40V18.5714H26.8378L38.899 13.3018L37.7552 10.6836L26.3564 15.6638L35.1522 6.868L33.132 4.8477L23.955 14.0248L28.8166 1.99147L26.1676 0.921164L21.4286 12.6506V0Z"
              fill="#0000ff"
            />
          </svg>
          <h5>BACKEND</h5>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 40 40"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M21.4286 0H18.5714V12.6506L13.8324 0.921164L11.1833 1.99147L16.0451 14.0248L6.86802 4.8477L4.84772 6.86802L13.6435 15.6638L2.24482 10.6836L1.10092 13.3018L13.1621 18.5714H0V21.4286H13.1621L1.10092 26.6982L2.24482 29.3164L13.6435 24.3362L4.84772 33.132L6.86802 35.1522L16.0451 25.9752L11.1833 38.0086L13.8324 39.0788L18.5714 27.3494V40H21.4286V27.3494L26.1676 39.0788L28.8166 38.0086L23.955 25.9752L33.132 35.1522L35.1522 33.132L26.3564 24.3362L37.7552 29.3164L38.899 26.6982L26.838 21.4286H40V18.5714H26.8378L38.899 13.3018L37.7552 10.6836L26.3564 15.6638L35.1522 6.868L33.132 4.8477L23.955 14.0248L28.8166 1.99147L26.1676 0.921164L21.4286 12.6506V0Z"
              fill="#0000ff"
            />
          </svg>
          <h5>CLOUD AUTOMATIONS</h5>
        </motion.div>
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="flex"
        >
          <div className="full-btn">
            <button>
              <a href="#projects">Projects</a>
            </button>
          </div>
          <div className="empty-btn">
            <button>
              <a href="#contact">Contact</a>
            </button>
          </div>
        </motion.div>
      </div>

      <div className="w-full flex align-middle justify-center pb-14 pt-8 md:!p-0">
        <div className="hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="381"
            height="381"
            viewBox="0 0 361 361"
            fill="none"
          >
            <mask id="path-1-inside-1_209_249" fill="white">
              <path
                fillRule="evenodd"
                clipule="evenodd"
                d="M77.9518 27.7827L27.1027 78.9718L93.2845 144.714L0 145.025L0.240139 217.177L93.5249 216.866L27.7823 283.049L78.9712 333.898L144.714 267.716L145.024 361L217.176 360.761L216.865 267.475L283.047 333.218L333.896 282.029L267.714 216.286L361 215.976L360.76 143.824L267.474 144.135L333.217 77.9525L282.028 27.1032L216.285 93.2855L215.975 0L143.823 0.239878L144.134 93.5254L77.9518 27.7827Z"
              />
            </mask>
            <motion.path
              d="M77.9518 27.7827L27.1027 78.9718L93.2845 144.714L0 145.025L0.240139 217.177L93.5249 216.866L27.7823 283.049L78.9712 333.898L144.714 267.716L145.024 361L217.176 360.761L216.865 267.475L283.047 333.218L333.896 282.029L267.714 216.286L361 215.976L360.76 143.824L267.474 144.135L333.217 77.9525L282.028 27.1032L216.285 93.2855L215.975 0L143.823 0.239878L144.134 93.5254L77.9518 27.7827Z"
              mask="url(#path-1-inside-1_209_249)"
              fill="transparent"
              strokeWidth="20"
              stroke="#0000ff"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </div>
        <div className="md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="300"
            height="300"
            viewBox="0 0 361 361"
            fill="none"
          >
            <mask id="path-1-inside-1_209_249" fill="white">
              <path
                fillRule="evenodd"
                clipule="evenodd"
                d="M77.9518 27.7827L27.1027 78.9718L93.2845 144.714L0 145.025L0.240139 217.177L93.5249 216.866L27.7823 283.049L78.9712 333.898L144.714 267.716L145.024 361L217.176 360.761L216.865 267.475L283.047 333.218L333.896 282.029L267.714 216.286L361 215.976L360.76 143.824L267.474 144.135L333.217 77.9525L282.028 27.1032L216.285 93.2855L215.975 0L143.823 0.239878L144.134 93.5254L77.9518 27.7827Z"
              />
            </mask>
            <motion.path
              d="M77.9518 27.7827L27.1027 78.9718L93.2845 144.714L0 145.025L0.240139 217.177L93.5249 216.866L27.7823 283.049L78.9712 333.898L144.714 267.716L145.024 361L217.176 360.761L216.865 267.475L283.047 333.218L333.896 282.029L267.714 216.286L361 215.976L360.76 143.824L267.474 144.135L333.217 77.9525L282.028 27.1032L216.285 93.2855L215.975 0L143.823 0.239878L144.134 93.5254L77.9518 27.7827Z"
              mask="url(#path-1-inside-1_209_249)"
              fill="transparent"
              strokeWidth="10"
              stroke="#0000ff"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
