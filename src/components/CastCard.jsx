import React from "react";
import { Link } from "react-router-dom";

const CastCard = ({ name, character, profile_path, id }) => {
  if (!profile_path) return <></>;
  return (
    <Link
      to={`/people/${id}`}
      className="card h-96 overflow-hidden bg-secondary shadow-xl"
    >
      <div className=" ">
        <img
          src={`https://image.tmdb.org/t/p/w342/${profile_path}`}
          alt="Shoes"
          style={{
            height: "280px",
          }}
          className=" w-full object-cover h-40 overflow-hidden "
        />
      </div>

      <div className=" p-5 text-white">
        <h2 className="card-title">{name}</h2>
        <div className="badge badge-neutral ">{character}</div>
      </div>
    </Link>
  );
};

export default CastCard;
