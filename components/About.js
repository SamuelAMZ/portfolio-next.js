import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-grid md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-0">
        <div className="about-head">
          <div className="header-detail-wrapper">
            <h5>ABOUT</h5>
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
            <h5>ME</h5>
          </div>
          <div>
            <h2>Always Cloud scalling && app testing first approch.</h2>
          </div>
        </div>
        <div className="about-body">
          <h3>
            I am a energetic, flexible and hardworking individual. Broad skills
            and experience in fullstack web development.
          </h3>

          <h4>
            Furthermore, I am adept at handling multiple tasks on a daily basis
            competently and at working well under pressure. A key strength is
            communication, building strong relationships with people in order to
            deliver the best results.
          </h4>
          <h4>
            Recently, I'm spending a majority of my time improving my knowledge
            and preparing for my AWS Certified Developer Associate Certification
            that I'm taking soon.
          </h4>
          <h4>
            And in my spare time, I'm working on adding new features to my open
            source projects.
          </h4>
          <div className="flex">
            <div className="full-btn">
              <button>Projects</button>
            </div>
            <div className="empty-btn">
              <button>Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
