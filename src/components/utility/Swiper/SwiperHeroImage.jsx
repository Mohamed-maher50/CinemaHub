import React from "react";

const SwiperHeroImage = ({ className, poster_path, backdrop_path }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
      alt=""
      className={`${className ? className : ""}  `}
    />
  );
};

export default SwiperHeroImage;
