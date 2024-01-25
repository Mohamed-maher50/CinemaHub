import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ children }) => {
  return (
    <div className="drawer-side z-50">
      <label
        htmlFor="my-drawer"
        aria-label="close sidebar"
        className="drawer-overlay"
      ></label>
      {children}
    </div>
  );
};

export default Sidebar;
