import React from "react";

const SkeletonCard = ({ className }) => {
  return (
    <div className="flex flex-col  gap-4 ">
      <div className="skeleton bg-gray-800 shadow-lg h-80 w-full"></div>
    </div>
  );
};

export default SkeletonCard;
