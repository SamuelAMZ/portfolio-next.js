import React from "react";
import { BsDot } from "react-icons/bs";

const Skills = () => {
  return (
    <div className="section">
      <div className="section-container md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-0">
        <div className="section-head">
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
          <h2>Skills</h2>
          <h4 className="subheading">WEB DEVELOPER SKILLS</h4>
        </div>
        <div className="section-content">
          <div className="box">
            <h3 className="mb-7">Frontend</h3>
            <h4 className="skills">
              REACT.JS
              <BsDot />
              NEXT.JS
              <BsDot />
              REDUX
              <BsDot />
              CONTEXT API
              <BsDot />
              JAVASCRIPT
              <BsDot />
              TYPESCRIPT
              <BsDot />
              HTML/CSS
              <BsDot />
              SASS
              <BsDot />
              TAILWIND
              <BsDot />
              DAISY UI
              <BsDot />
              MUI
            </h4>
          </div>
          <div className="box">
            <h3 className="mb-7">Backend</h3>
            <h4 className="skills">
              NODE.JS
              <BsDot />
              EXPRESS.JS
              <BsDot />
              MONGODB
              <BsDot />
              MYSQL
              <BsDot />
              SQL
              <BsDot />
              GRAPHQL
              <BsDot />
              FIREBASE
              <BsDot />
              REST API
              <BsDot />
              AUTH0
              <BsDot />
              JWT
              <BsDot />
              PASSPORT.JS
            </h4>
          </div>
          <div className="box">
            <h3 className="mb-7">Cloud</h3>
            <h4 className="skills">
              AWS
              <BsDot />
              NETLIFY
              <BsDot />
              CLOUD FUNCTIONS
              <BsDot />
              DOCKER
              <BsDot />
              KUBERNETES
              <BsDot />
              TERRAFORM
              <BsDot />
              GITHUB ACTIONS
              <BsDot />
              LINUX
            </h4>
          </div>
          <div className="box">
            <h3 className="mb-7">Tools</h3>
            <h4 className="skills">
              VSCODE
              <BsDot />
              GIT/GITHUB
              <BsDot />
              JEST
              <BsDot />
              STRAPI
              <BsDot />
              WORDPRESS
              <BsDot />
              FIGMA
              <BsDot />
              ADOBE XD
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
