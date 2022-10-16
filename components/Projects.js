import Link from "next/link";
import { motion } from "framer-motion";

const Projects = () => {
  // link projects to single pages
  const data = [
    {
      id: "1",
      title: "Cloud providers pricing API",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: "2",
      title: "Web3 advance social media platform",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: "3",
      title: "Youtube video transcritions fetcher API",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
    {
      id: "4",
      title: "Advance typeracer racing game",
      content:
        "lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum",
    },
  ];

  return (
    <div id="projects" className="section projects">
      <div className="about-grid md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="section-head"
        >
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
          <h2>Projects</h2>
          <h4 className="subheading">LEARNINGS && ACCOIMPLISHMENTS</h4>
        </motion.div>
        <div className="projects-elements">
          <Link href={`/projects/1`}>
            <motion.a
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project">
                <div className="img">
                  <img src="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png" />
                </div>
                <div className="desc">
                  <div className="badge">fullstack && scraping</div>
                  <h2 className="title">
                    Cloud providers pricing API (Open source)
                  </h2>
                  <h4 className="description">
                    A Node API of prices of different cloud services (from more
                    than 7 providers, AWS, GCP, AZURE, LINODE ...)
                  </h4>
                  <div className="flex">
                    <div className="filled-btn">
                      <button>
                        Live Link && Source Code && Tech Stack Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </Link>
          <Link href={`/projects/2`}>
            <motion.a
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project">
                <div className="img">
                  <img src="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png" />
                </div>
                <div className="desc pro-reverse">
                  <div className="badge">fullstack</div>
                  <h2 className="title">Web3 advance social media platform</h2>
                  <h4 className="description">
                    A social network quite similar to twitter with its main
                    features but with a Web3 dimension
                  </h4>
                  <div className="flex">
                    <div className="filled-btn">
                      <button>
                        Live Link && Source Code && Tech Stack Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </Link>
          <Link href={`/projects/3`}>
            <motion.a
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project">
                <div className="img">
                  <img src="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png" />
                </div>
                <div className="desc">
                  <div className="badge">backend only</div>
                  <h2 className="title">
                    Youtube video transcritions fetcher API
                  </h2>
                  <h4 className="description">
                    A Node based API for getting and fetching youtube videos
                    transcription content.
                  </h4>
                  <div className="flex">
                    <div className="filled-btn">
                      <button>
                        Live Link && Source Code && Tech Stack Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </Link>
          <Link href={`/projects/4`}>
            <motion.a
              initial={{ y: 100, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="project">
                <div className="img">
                  <img src="https://assets.website-files.com/6267660573e4ca6c9d6d12d4/6267689899af93b8b041554f_Project%2001.png" />
                </div>
                <div className="desc pro-reverse">
                  <div className="badge">frontend only</div>
                  <h2 className="title">Advance typeracer racing game</h2>
                  <h4 className="description">
                    An advanced typing game allows you to compete against bots
                    with random or preset speeds.
                  </h4>
                  <div className="flex">
                    <div className="filled-btn">
                      <button>
                        Live Link && Source Code && Tech Stack Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          </Link>
          <div className="flex">
            <div className="full-btn full-w-btn">
              <button>
                <a href="https://github.com/SamuelAMZ" target="blank">
                  More Projects
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
