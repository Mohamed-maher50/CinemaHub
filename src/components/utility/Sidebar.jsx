import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LanguageSelectBox from "./LanguageSelectBox";
import Logo from "../Logo";

const Sidebar = () => {
  const { genres } = useSelector((state) => state.genresReducer);
  const handleClick = () => {
    document.getElementById("my-drawer")?.click();
  };
  const lang = localStorage.getItem("lang");
  return (
    <ul className="menu grid gap-y-1 w-80 min-h-full bg-secondary ">
      <Logo lang={lang || "en"} />
      <ul>
        <li className="text-lg capitalize p-1">lang</li>
        <LanguageSelectBox />
      </ul>

      <li className="">
        <li className="text-lg border-b-2 p-0 ps-1 pe-3 m-0  w-fit rounded-none border-white">
          Genres
        </li>
        <ul className="grid grid-cols-3 p-2 m-0 ">
          {genres.map((genre, index) => {
            return (
              <li onClick={handleClick} key={index} className="text-white">
                <Link
                  to={`/discover?with_genres=${genre.id}`}
                  className=" text-white  duration-200 ease-linear"
                >
                  {genre.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <li></li>
      </li>
    </ul>
  );
};

export default Sidebar;
