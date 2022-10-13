import { BiMenuAltRight } from "react-icons/bi";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoIosArrowUp } from "react-icons/io";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);
  const [isSubPage, setIsSubPage] = useState(false);
  const router = useRouter();

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
      <div
        id="top"
        className="header md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-5 "
      >
        <div>
          <Link href={"/#top"}>
            <a>
              <img src="/img/logo-light.png" alt="logo" className="logo" />
            </a>
          </Link>
        </div>
        {/* desktop only */}
        <div className="menu hidden md:block">
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
                <Link href="/#blog">
                  <a>Blog</a>
                </Link>
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
              <li>
                <a href="/#blog">Blog</a>
              </li>
            </ul>
          )}
        </div>

        {isSubPage ? (
          <Link href="/#contact">
            <a>
              <div className="empty-btn hidden md:block">
                <button>Contact</button>
              </div>
            </a>
          </Link>
        ) : (
          <a href="#contact">
            <div className="empty-btn hidden md:block">
              <button>Contact</button>
            </div>
          </a>
        )}

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
              {isSubPage ? (
                <>
                  <ul>
                    <li>
                      <BiHomeAlt />

                      <Link href="/#top">
                        <a className="active">Home</a>
                      </Link>
                    </li>
                    <li>
                      <BiUser />
                      <Link href="/#about">
                        <a>About</a>
                      </Link>
                    </li>
                    <li>
                      <CgWorkAlt />
                      <Link href="/#projects">
                        <a>Projets</a>
                      </Link>
                    </li>
                    <li>
                      <HiOutlineDocumentDuplicate />
                      <Link href="/#blog">
                        <a>Blog</a>
                      </Link>
                    </li>
                  </ul>

                  <button>
                    <Link href="/#contact">
                      <a>Contact</a>
                    </Link>
                  </button>
                </>
              ) : (
                <>
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
                </>
              )}
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
