import { Circle } from "rc-progress";
import React from "react";

const ProgressCircle = ({ className, percent = 2, ...props }) => {
  let strokeColor = "";

  if (percent < 25) {
    strokeColor += "#B52023";
  } else if (percent < 50) {
    strokeColor += "yellow";
  } else if (percent <= 70) {
    strokeColor += "#F7D654";
  } else {
    strokeColor += "#22CA5D";
  }
  return (
    <div className={`relative ${className ? className : ""}`}>
      <Circle
        percent={percent}
        strokeWidth={6}
        strokeLinecap="square"
        strokeColor={strokeColor}
        steps={50}
        {...props}
      />
      <span className="absolute text-inherit  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        {percent}%
      </span>
    </div>
  );
};

export default ProgressCircle;
