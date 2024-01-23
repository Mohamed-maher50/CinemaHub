import React from "react";
import SkeletonCard from "../movie/SkeletonCard";

const SkeletonContainer = () => {
  return (
    <div className="grid grid-cols-2 my-2 md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 h-80 overflow-hidden gap-3">
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </div>
  );
};

export default SkeletonContainer;
