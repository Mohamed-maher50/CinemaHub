import React from "react";
import { Link } from "react-router-dom";

function Logo({ lang }) {
  return (
    <Link
      to={`/${lang}`}
      className="w-fit   rounded-lg shadow-sm overflow-hidden inline-block"
    >
      <img
        src="/logo.svg"
        className=" h-12 object-cover w-28 mix-blend-lighten"
        alt=""
      />
    </Link>
  );
}

export default Logo;
