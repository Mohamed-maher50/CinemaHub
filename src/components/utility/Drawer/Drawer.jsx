import React from "react";

import DrawerContent from "./DrawerContent";
import Toggle from "./Toggle";

import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
const Drawer = ({ children }) => {
  const { lang } = useSelector((state) => state.SettingsReducer);
  return (
    <div className={`drawer text-white `} dir={lang === "ar" ? "rtl" : ""}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      {children}
    </div>
  );
};
Drawer.Toggle = Toggle;
Drawer.Sidebar = Sidebar;
Drawer.Content = DrawerContent;
export default Drawer;
