import React from "react";

const LoadingYoutubeVideo = ({ className }) => {
  return (
    <div
      className={`skeleton w-32 bg-secondary  h-32 ${
        className ? className : ""
      }`}
    ></div>
  );
};

export default LoadingYoutubeVideo;
