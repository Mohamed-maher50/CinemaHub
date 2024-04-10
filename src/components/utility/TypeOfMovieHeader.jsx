import React from "react";

const TypeOfMovieHeader = ({ title, className }) => {
  return (
    <div>
      <h1
        className={` max-md:text-2xl text-3xl font-[900]  drop-shadow-lg text-white py-7 ${
          className ? className : ""
        }`}
      >
        {title}
      </h1>
    </div>
  );
};

export default TypeOfMovieHeader;
