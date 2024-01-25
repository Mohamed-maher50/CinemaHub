import React from "react";

import DrawerContent from "./DrawerContent";
import Toggle from "./Toggle";

import Sidebar from "./Sidebar";
const Drawer = ({ children }) => {
  return (
    <div className="drawer text-white">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};
Drawer.Toggle = Toggle;
Drawer.Sidebar = Sidebar;
Drawer.Content = DrawerContent;
export default Drawer;
