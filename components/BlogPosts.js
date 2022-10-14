import React from "react";
import Link from "next/link";

const BlogPosts = () => {
  return (
    <div id="blog" className="about-container">
      <div className="md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 md:px-10 xl:px-5">
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
          <h2>Blog Posts</h2>
          <h4 className="subheading">THOUGHT && NEWS</h4>
        </div>
        <div className="posts-content">
          <Link href="/blogs/1">
            <a>
              <div className="post">
                <div className="title">
                  <div className="date">DESIGN / APRIL 28, 2022</div>
                  <div className="heading">
                    <h3>Why I moved from Wordpress to Webflow</h3>
                  </div>
                </div>
                <div className="desc">
                  <h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam, saepe veniam! Eligendi corrupti velit voluptates ab
                    labore similique, eveniet illo!
                  </h4>
                </div>
              </div>
            </a>
          </Link>
          <Link href="/blogs/2">
            <a>
              <div className="post">
                <div className="title">
                  <div className="date">DESIGN / APRIL 28, 2022</div>
                  <div className="heading">
                    <h3>Why I moved from Wordpress to Webflow</h3>
                  </div>
                </div>
                <div className="desc">
                  <h4>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Quam, saepe veniam! Eligendi corrupti velit voluptates ab
                    labore similique, eveniet illo!
                  </h4>
                </div>
              </div>
            </a>
          </Link>
          <div className="flex">
            <Link href="/blogs">
              <a className="full-btn full-w-btn">
                <button>More Posts</button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPosts;
