import React, { useContext, useEffect, useState } from "react";
import SearchContext from "../../contexts/SearchContext";
import { Link } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import SelectBox from "../SelectBox/SelectBox";
import { Get_Languages } from "../../lib/configuration";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import i18n from "../../i18n";
import { TbMenuDeep } from "react-icons/tb";
import Drawer from "./Drawer/Drawer";

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);
  const { openResultBox } = useContext(SearchContext);
  const [langs, setLangs] = useState([]);
  window.onscroll = () => {
    if (window.scrollY >= 60 && !isFixed) {
      setIsFixed(true);
    } else if (window.scrollY < 60 && isFixed) {
      setIsFixed(false);
    }
  };
  useEffect(() => {}, []);
  const handleOnChange = (val) => {
    i18n.changeLanguage(val.iso_639_1);
  };
  console.log(isFixed);
  useEffect(() => {
    (async () => {
      const [Languages, languagesErrors] = await Get_Languages();
      if (!languagesErrors) setLangs(Languages);
    })();
  }, []);
  return (
    <div
      className={`bg-[#151f2ee6] ${
        isFixed ? "fixed" : "relative"
      } shadow-sm shadow-secondary z-50  top-0 duration-500 right-0 left-0`}
    >
      <div className="container mx-auto">
        <div className="navbar sticky  top-0 left-0 right-0 ">
          <div className="flex w-full">
            <div className="grow">
              <Link to={"/"} className="w-fit overflow-hidden inline-block">
                <h1 className="border-y-2 px-2 py-2 uppercase w-fit text-white border-blue-500 drop-shadow-lg text-xl">
                  Cinema Hub
                </h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <SelectBox
                options={langs}
                getOptionValue={(obj) => obj.iso_639_1}
                className="w-36"
                onChange={handleOnChange}
                getOptionLabel={(obj) => <span>{obj.english_name}</span>}
              />
            </div>
            {/* <SearchInput /> */}
            <div onClick={openResultBox} className="w-fit">
              <IoSearch className="text-[rgba(255,255,255,.7)] mx-2 cursor-pointer text-2xl font-[900]" />
            </div>
            <div className="block md:hidden">
              <Drawer.Toggle>
                <TbMenuDeep className="text-2xl  cursor-pointer hover:scale-110 duration-500 " />
              </Drawer.Toggle>
            </div>
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
