import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const { genres } = useSelector((state) => state.genresReducer);
  const handleClick = () => {
    document.getElementById("my-drawer")?.click();
  };
  return (
    <ul className="menu  w-80 min-h-full bg-secondary ">
      <Link to={"/"} className="py-5 px-2   border-b-slate-300  w-fit">
        <h1 className="border-y-2 px-2 py-2 mb-10 uppercase w-fit text-white border-blue-500 drop-shadow-lg text-xl">
          Cinema Hub
        </h1>
      </Link>
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
      </li>
    </ul>
  );
};

export default Sidebar;
