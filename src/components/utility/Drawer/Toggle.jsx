import React from "react";

const Toggle = ({ children }) => {
  return (
    <label htmlFor="my-drawer" className="drawer-button  btn-primary">
      {children}
    </label>
  );
};

export default Toggle;
