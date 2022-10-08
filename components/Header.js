import { BiMenuAltRight } from "react-icons/bi";
import { BiUser, BiHomeAlt } from "react-icons/bi";
import { CgWorkAlt } from "react-icons/cg";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";

import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsmenuOpen] = useState(false);

  return (
    <div className="md:max-w-7xl xl:max-w-screen-xl mx-auto px-5 py-5 flex items-center justify-between md:px-10 xl:px-0 ">
      <div>
        <img src="/img/logo.png" alt="logo" className="logo" />
      </div>
      {/* desktop only */}
      <div className="menu hidden md:block">
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
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>

      <div className="empty-btn hidden md:block">
        <button>Contact</button>
      </div>

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

          <div className="content shadow-xl">
            <ul>
              <li>
                <BiHomeAlt />
                <a className="active" href="#">
                  Home
                </a>
              </li>
              <li>
                <BiUser />
                <a href="#">About</a>
              </li>
              <li>
                <CgWorkAlt />
                <a href="#">Projets</a>
              </li>
              <li>
                <HiOutlineDocumentDuplicate />
                <a href="#">Blog</a>
              </li>
            </ul>
            <button>Contact</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Header;
