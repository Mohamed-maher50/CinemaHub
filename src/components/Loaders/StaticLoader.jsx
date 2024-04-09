import React from "react";

function StaticLoader() {
  return (
    <div className="text-2xl  animate-pulse h-96 gap-5 items-center justify-center w-full  flex flex-col text-white">
      <div class="eye_loader"></div>
      <div class="static_loader"></div>
    </div>
  );
}

export default StaticLoader;
