import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";
import { SettingsProvider } from "./contexts/SettingsContext";
import Drawer from "./components/utility/Drawer/Drawer";
import "./i18n";
axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.headers.Authorization = `Bearer ${process.env.REACT_APP_API_TOKEN}`;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SettingsProvider>
        {/* <Drawer> */}

        {/* <Drawer.content> */}
        <div className="drawer text-white">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <App />
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
          </div>
          <div className="drawer-side z-50">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-black "></label>
            <ul className="menu p-4 w-80 min-h-full bg-secondary ">
              {/* Sidebar content here */}
              <li onClick={() => {
                console.log(
                  "work"
                );
              }}><a>Sidebar Item 1</a></li>
              <li><a>Sidebar Item 2</a></li>

            </ul>
          </div>
        </div>

        {/* </Drawer.content> */}

        {/* </Drawer> */}
      </SettingsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
