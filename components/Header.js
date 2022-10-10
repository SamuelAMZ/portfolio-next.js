import { BiMenuAltRight } from "react-icons/bi";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  // scroll to top
  const scrollToTop = () => {
    const topElm = document.querySelector(".header");
    topElm.scrollIntoView({ behavior: "smooth", block: "end" });
  };
  const [topNow, setTopNow] = useState(false);

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      setTopNow(true);
    } else {
      setTopNow(false);
    }
  };

  useEffect(() => {
    window.onscroll = () => scrollFunction();
  }, [topNow]);

  return (
    <>
      <div
        id="top"
        className="header md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5 "
      >
        <div>
          <a href="/#top">
            <img src="/img/logo-light.png" alt="logo" className="logo" />
          </a>
        </div>
        {/* desktop only */}
        <div className="menu hidden md:block">
          <ul>
            <li>
              <a className="active" href="/#top">
                Home
              </a>
            </li>
            <li>
              <a href="/#about">About</a>
            </li>
            <li>
              <a href="/#projects">Projets</a>
            </li>
            <li>
              <a href="/#blog">Blog</a>
            </li>
          </ul>
        </div>

        <a href="/#contact">
          <div className="empty-btn hidden md:block">
            <button>Contact</button>
          </div>
        </a>

        {/* mobile only */}
        <div className="icon-wr md:hidden" onClick={() => setIsmenuOpen(true)}>
          <BiMenuAltRight className="icon" />
        </div>

        {isMenuOpen && (
          <>
            <div
              className="sidemenu md:hidden"
              onClick={() => setIsmenuOpen(false)}
            ></div>

            <div
              className="content shadow-xl"
              onClick={() => setIsmenuOpen(false)}
            >
              <ul>
                <li>
                  <BiHomeAlt />
                  <a className="active" href="/#top">
                    Home
                  </a>
                </li>
                <li>
                  <BiUser />
                  <a href="/#about">About</a>
                </li>
                <li>
                  <CgWorkAlt />
                  <a href="/#projects">Projets</a>
                </li>
                <li>
                  <HiOutlineDocumentDuplicate />
                  <a href="/#blog">Blog</a>
                </li>
              </ul>

              <button>
                <a href="/#contact">Contact</a>
              </button>
            </div>
          </>
        )}
      </div>

      {/* scroll to top */}
      {topNow && (
        <div className="back-to-top" onClick={() => scrollToTop()}>
          <IoIosArrowUp />
        </div>
      )}
    </>
  );
};

export default Header;
