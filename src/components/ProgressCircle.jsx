import React, { useEffect } from "react";

const ProgressCircle = ({ value }) => {
  let classNames = "radial-progress  ";
  if (value < 25) {
    classNames += " text-red-400";
  } else if (value < 50) {
    classNames += " text-orange-400";
  } else if (value <= 70) {
    classNames += " text-green-400";
  } else {
    classNames += " text-yellow-300";
  }

  return (
    <div
      className={`${classNames}  `}
      style={{ "--value": value, "--size": "3rem" }}
      role="progressbar"
    >
      {Math.round(value)}%
    </div>
  );
};

export default ProgressCircle;
