import React from "react";
import { Link } from "react-router-dom";

const MovieSearchBox = ({ poster_path, id, onClick }) => {
  if (!poster_path) return <></>;
  return (
    <Link
      onClick={() => onClick && onClick()}
      to={`/movie/${id}`}
      class="mt-3 flex w-full text-white items-center justify-between rounded-2xl bg-black shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none"
    >
      <div className="">
        <img
          src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
          alt=""
          className="h-80"
        />
      </div>
    </Link>
  );
};

export default MovieSearchBox;
