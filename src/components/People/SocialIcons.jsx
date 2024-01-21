import React from "react";

const SocialIcons = ({ children, link, className, label }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className={`text-xl border-[rgba(255,255,255,.9)] border  btn-info text-white p-2 rounded-md ${
        className ? className : ""
      }`}
    >
      {label}
      {children}
    </a>
  );
};

export default SocialIcons;
