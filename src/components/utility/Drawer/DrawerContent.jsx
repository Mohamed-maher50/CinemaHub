import React from "react";
const DrawerContent = ({ children }) => {

    return (
        <div className="drawer-content">
            {children}
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div>

    );
};

export default DrawerContent;
