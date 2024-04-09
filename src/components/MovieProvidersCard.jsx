import React from "react";

function MovieProvidersCard({ logo_path, provider_name }) {
  return (
    <div className="avatar  ">
      <div className="w-16 cursor-pointer shadow-md shadow-gray-800 rounded-xl">
        <img
          src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
          alt={provider_name}
        />
      </div>
    </div>
  );
}

export default MovieProvidersCard;
