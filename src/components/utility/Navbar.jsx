import React, { useContext, useState } from "react";
import SearchContext from "../../contexts/SearchContext";
import { useParams } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

import LanguageListBox from "../LanguageListBox";
import Logo from "../Logo";

const Navbar = () => {
  let { lang } = useParams();
  const [isFixed, setIsFixed] = useState(false);
  const { openResultBox } = useContext(SearchContext);

  window.onscroll = () => {
    if (window.scrollY >= 60 && !isFixed) {
      setIsFixed(true);
    } else if (window.scrollY < 60 && isFixed) {
      setIsFixed(false);
    }
  };

  return (
    <div
      className={`bg-black ${
        isFixed ? "fixed border-b border-indigo-600" : "relative"
      }  z-20  w-full top-0 duration-500 right-0 left-0`}
    >
      <div className="container mx-auto">
        <div className="navbar sticky  top-0 left-0 right-0 ">
          <div className="flex items-center w-full">
            <div className="grow ">
              <Logo lang={lang} />
            </div>

            <div className="min-w-32  flex items-center ">
              <LanguageListBox />
            </div>

            <div onClick={openResultBox} className="w-fit">
              <IoSearch className="text-[rgba(255,255,255,.7)] mx-2 cursor-pointer text-2xl font-[900]" />
            </div>
            {/* <div className="block md:hidden">
              <Drawer.Toggle>
                <TbMenuDeep className="text-2xl  cursor-pointer hover:scale-110 duration-500 " />
              </Drawer.Toggle>
            </div> */}
            <div className="">
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="/3594138.jpg"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
