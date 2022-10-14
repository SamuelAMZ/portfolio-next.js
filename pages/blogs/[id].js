import React from "react";
import Head from "next/head";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Link from "next/link";
import { BsArrow90DegLeft } from "react-icons/bs";

export const getStaticPaths = async () => {
  const data = [
    {
      id: "1",
      title: "Why I moved from Wordpress to Webflow 1",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: "2",
      title: "Why I moved from Wordpress to Webflow 2",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: "3",
      title: "Why I moved from Wordpress to Webflow 4",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
  ];

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const data = [
    {
      id: "1",
      title: "Why I moved from Wordpress to Webflow 1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
    {
      id: "2",
      title: "Why I moved from Wordpress to Webflow 2",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: "3",
      title: "Why I moved from Wordpress to Webflow 3",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. <br><br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br><br>Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    },
  ];

  const id = context.params.id;

  return {
    props: {
      project: data[id - 1],
    },
  };
};

const Id = ({ project }) => {
  return (
    <>
      <Head>
        <title>{project.title}</title>
      </Head>

      <Header />
      <div className="section post-section">
        <div className="post-container xl:max-w-5xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5">
          <div className="post-grid blog-post">
            <div className="post-content">
              <Link href="/blogs">
                <a>
                  <div className="back">
                    <BsArrow90DegLeft />
                    <p>Back</p>
                  </div>
                </a>
              </Link>
              <h1>{project.title}</h1>
              <h4 dangerouslySetInnerHTML={{ __html: project.content }}></h4>
            </div>
          </div>
        </div>

        {/* layer */}
        <div className="layer3 hidden md:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="340"
            height="340"
            viewBox="0 0 361 361"
            fill="none"
          >
            <mask id="path-1-inside-1_209_249" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M77.9518 27.7827L27.1027 78.9718L93.2845 144.714L0 145.025L0.240139 217.177L93.5249 216.866L27.7823 283.049L78.9712 333.898L144.714 267.716L145.024 361L217.176 360.761L216.865 267.475L283.047 333.218L333.896 282.029L267.714 216.286L361 215.976L360.76 143.824L267.474 144.135L333.217 77.9525L282.028 27.1032L216.285 93.2855L215.975 0L143.823 0.239878L144.134 93.5254L77.9518 27.7827Z"
              />
            </mask>
            <path
              d="M77.9518 27.7827L83.5898 22.1071L77.9142 16.4691L72.2762 22.1448L77.9518 27.7827ZM27.1027 78.9718L21.427 73.3338L15.7891 79.0095L21.4647 84.6475L27.1027 78.9718ZM93.2845 144.714L93.3111 152.714L112.625 152.65L98.9225 139.039L93.2845 144.714ZM0 145.025L-0.0266408 137.025L-8.02658 137.052L-7.99996 145.052L0 145.025ZM0.240139 217.177L-7.75982 217.204L-7.73319 225.204L0.266779 225.177L0.240139 217.177ZM93.5249 216.866L99.2005 222.504L112.812 208.802L93.4982 208.867L93.5249 216.866ZM27.7823 283.049L22.1066 277.411L16.4686 283.086L22.1443 288.724L27.7823 283.049ZM78.9712 333.898L73.3332 339.574L79.0089 345.212L84.6469 339.536L78.9712 333.898ZM144.714 267.716L152.714 267.689L152.649 248.375L139.038 262.078L144.714 267.716ZM145.024 361L137.024 361.027L137.05 369.026L145.05 369L145.024 361ZM217.176 360.761L217.203 368.761L225.203 368.734L225.176 360.734L217.176 360.761ZM216.865 267.475L222.503 261.8L208.801 248.188L208.865 267.502L216.865 267.475ZM283.047 333.218L277.409 338.894L283.085 344.532L288.723 338.856L283.047 333.218ZM333.896 282.029L339.572 287.667L345.21 281.992L339.534 276.354L333.896 282.029ZM267.714 216.286L267.688 208.286L248.374 208.351L262.076 221.962L267.714 216.286ZM361 215.976L361.027 223.975L369.027 223.949L369 215.949L361 215.976ZM360.76 143.824L368.76 143.798L368.733 135.798L360.733 135.824L360.76 143.824ZM267.474 144.135L261.798 138.497L248.187 152.199L267.501 152.135L267.474 144.135ZM333.217 77.9525L338.892 83.5904L344.53 77.9148L338.855 72.2768L333.217 77.9525ZM282.028 27.1032L287.666 21.4275L281.99 15.7895L276.352 21.4652L282.028 27.1032ZM216.285 93.2855L208.285 93.3121L208.349 112.626L221.961 98.9235L216.285 93.2855ZM215.975 0L223.975 -0.0265955L223.948 -8.02655L215.948 -7.99996L215.975 0ZM143.823 0.239878L143.797 -7.76008L135.797 -7.73348L135.824 0.266474L143.823 0.239878ZM144.134 93.5254L138.496 99.201L152.198 112.812L152.134 93.4988L144.134 93.5254ZM72.2762 22.1448L21.427 73.3338L32.7784 84.6098L83.6275 33.4207L72.2762 22.1448ZM21.4647 84.6475L87.6465 150.39L98.9225 139.039L32.7407 73.2962L21.4647 84.6475ZM93.2578 136.715L-0.0266408 137.025L0.0266408 153.025L93.3111 152.714L93.2578 136.715ZM-7.99996 145.052L-7.75982 217.204L8.24009 217.15L7.99996 144.999L-7.99996 145.052ZM0.266779 225.177L93.5515 224.866L93.4982 208.867L0.213498 209.177L0.266779 225.177ZM87.8492 211.228L22.1066 277.411L33.4579 288.687L99.2005 222.504L87.8492 211.228ZM22.1443 288.724L73.3332 339.574L84.6092 328.222L33.4203 277.373L22.1443 288.724ZM84.6469 339.536L150.389 273.354L139.038 262.078L73.2955 328.26L84.6469 339.536ZM136.714 267.742L137.024 361.027L153.024 360.973L152.714 267.689L136.714 267.742ZM145.05 369L217.203 368.761L217.15 352.761L144.997 353L145.05 369ZM225.176 360.734L224.865 267.449L208.865 267.502L209.176 360.787L225.176 360.734ZM211.227 273.151L277.409 338.894L288.685 327.543L222.503 261.8L211.227 273.151ZM288.723 338.856L339.572 287.667L328.221 276.391L277.372 327.58L288.723 338.856ZM339.534 276.354L273.352 210.611L262.076 221.962L328.258 287.705L339.534 276.354ZM267.741 224.286L361.027 223.975L360.973 207.976L267.688 208.286L267.741 224.286ZM369 215.949L368.76 143.798L352.76 143.851L353 216.002L369 215.949ZM360.733 135.824L267.447 136.135L267.501 152.135L360.786 151.824L360.733 135.824ZM273.15 149.773L338.892 83.5904L327.541 72.3145L261.798 138.497L273.15 149.773ZM338.855 72.2768L287.666 21.4275L276.39 32.7788L327.579 83.6281L338.855 72.2768ZM276.352 21.4652L210.609 87.6476L221.961 98.9235L287.704 32.7411L276.352 21.4652ZM224.285 93.2589L223.975 -0.0265955L207.975 0.0265955L208.285 93.3121L224.285 93.2589ZM215.948 -7.99996L143.797 -7.76008L143.85 8.23983L216.002 7.99996L215.948 -7.99996ZM135.824 0.266474L136.134 93.552L152.134 93.4988L151.823 0.213283L135.824 0.266474ZM149.772 87.8497L83.5898 22.1071L72.3138 33.4584L138.496 99.201L149.772 87.8497Z"
              fill="#0000ff"
              mask="url(#path-1-inside-1_209_249)"
            />
          </svg>
        </div>
        <div className="layer3 md:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 361 361"
            fill="none"
          >
            <mask id="path-1-inside-1_209_249" fill="white">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M77.9518 27.7827L27.1027 78.9718L93.2845 144.714L0 145.025L0.240139 217.177L93.5249 216.866L27.7823 283.049L78.9712 333.898L144.714 267.716L145.024 361L217.176 360.761L216.865 267.475L283.047 333.218L333.896 282.029L267.714 216.286L361 215.976L360.76 143.824L267.474 144.135L333.217 77.9525L282.028 27.1032L216.285 93.2855L215.975 0L143.823 0.239878L144.134 93.5254L77.9518 27.7827Z"
              />
            </mask>
            <path
              d="M77.9518 27.7827L83.5898 22.1071L77.9142 16.4691L72.2762 22.1448L77.9518 27.7827ZM27.1027 78.9718L21.427 73.3338L15.7891 79.0095L21.4647 84.6475L27.1027 78.9718ZM93.2845 144.714L93.3111 152.714L112.625 152.65L98.9225 139.039L93.2845 144.714ZM0 145.025L-0.0266408 137.025L-8.02658 137.052L-7.99996 145.052L0 145.025ZM0.240139 217.177L-7.75982 217.204L-7.73319 225.204L0.266779 225.177L0.240139 217.177ZM93.5249 216.866L99.2005 222.504L112.812 208.802L93.4982 208.867L93.5249 216.866ZM27.7823 283.049L22.1066 277.411L16.4686 283.086L22.1443 288.724L27.7823 283.049ZM78.9712 333.898L73.3332 339.574L79.0089 345.212L84.6469 339.536L78.9712 333.898ZM144.714 267.716L152.714 267.689L152.649 248.375L139.038 262.078L144.714 267.716ZM145.024 361L137.024 361.027L137.05 369.026L145.05 369L145.024 361ZM217.176 360.761L217.203 368.761L225.203 368.734L225.176 360.734L217.176 360.761ZM216.865 267.475L222.503 261.8L208.801 248.188L208.865 267.502L216.865 267.475ZM283.047 333.218L277.409 338.894L283.085 344.532L288.723 338.856L283.047 333.218ZM333.896 282.029L339.572 287.667L345.21 281.992L339.534 276.354L333.896 282.029ZM267.714 216.286L267.688 208.286L248.374 208.351L262.076 221.962L267.714 216.286ZM361 215.976L361.027 223.975L369.027 223.949L369 215.949L361 215.976ZM360.76 143.824L368.76 143.798L368.733 135.798L360.733 135.824L360.76 143.824ZM267.474 144.135L261.798 138.497L248.187 152.199L267.501 152.135L267.474 144.135ZM333.217 77.9525L338.892 83.5904L344.53 77.9148L338.855 72.2768L333.217 77.9525ZM282.028 27.1032L287.666 21.4275L281.99 15.7895L276.352 21.4652L282.028 27.1032ZM216.285 93.2855L208.285 93.3121L208.349 112.626L221.961 98.9235L216.285 93.2855ZM215.975 0L223.975 -0.0265955L223.948 -8.02655L215.948 -7.99996L215.975 0ZM143.823 0.239878L143.797 -7.76008L135.797 -7.73348L135.824 0.266474L143.823 0.239878ZM144.134 93.5254L138.496 99.201L152.198 112.812L152.134 93.4988L144.134 93.5254ZM72.2762 22.1448L21.427 73.3338L32.7784 84.6098L83.6275 33.4207L72.2762 22.1448ZM21.4647 84.6475L87.6465 150.39L98.9225 139.039L32.7407 73.2962L21.4647 84.6475ZM93.2578 136.715L-0.0266408 137.025L0.0266408 153.025L93.3111 152.714L93.2578 136.715ZM-7.99996 145.052L-7.75982 217.204L8.24009 217.15L7.99996 144.999L-7.99996 145.052ZM0.266779 225.177L93.5515 224.866L93.4982 208.867L0.213498 209.177L0.266779 225.177ZM87.8492 211.228L22.1066 277.411L33.4579 288.687L99.2005 222.504L87.8492 211.228ZM22.1443 288.724L73.3332 339.574L84.6092 328.222L33.4203 277.373L22.1443 288.724ZM84.6469 339.536L150.389 273.354L139.038 262.078L73.2955 328.26L84.6469 339.536ZM136.714 267.742L137.024 361.027L153.024 360.973L152.714 267.689L136.714 267.742ZM145.05 369L217.203 368.761L217.15 352.761L144.997 353L145.05 369ZM225.176 360.734L224.865 267.449L208.865 267.502L209.176 360.787L225.176 360.734ZM211.227 273.151L277.409 338.894L288.685 327.543L222.503 261.8L211.227 273.151ZM288.723 338.856L339.572 287.667L328.221 276.391L277.372 327.58L288.723 338.856ZM339.534 276.354L273.352 210.611L262.076 221.962L328.258 287.705L339.534 276.354ZM267.741 224.286L361.027 223.975L360.973 207.976L267.688 208.286L267.741 224.286ZM369 215.949L368.76 143.798L352.76 143.851L353 216.002L369 215.949ZM360.733 135.824L267.447 136.135L267.501 152.135L360.786 151.824L360.733 135.824ZM273.15 149.773L338.892 83.5904L327.541 72.3145L261.798 138.497L273.15 149.773ZM338.855 72.2768L287.666 21.4275L276.39 32.7788L327.579 83.6281L338.855 72.2768ZM276.352 21.4652L210.609 87.6476L221.961 98.9235L287.704 32.7411L276.352 21.4652ZM224.285 93.2589L223.975 -0.0265955L207.975 0.0265955L208.285 93.3121L224.285 93.2589ZM215.948 -7.99996L143.797 -7.76008L143.85 8.23983L216.002 7.99996L215.948 -7.99996ZM135.824 0.266474L136.134 93.552L152.134 93.4988L151.823 0.213283L135.824 0.266474ZM149.772 87.8497L83.5898 22.1071L72.3138 33.4584L138.496 99.201L149.772 87.8497Z"
              fill="#0000ff"
              mask="url(#path-1-inside-1_209_249)"
            />
          </svg>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Id;
