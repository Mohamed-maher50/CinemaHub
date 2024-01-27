import React from "react";
import App from "../App";
import axios from "axios";
import { BrowserRouter } from "react-router-dom";

import Drawer from "../components/utility/Drawer/Drawer";
import genresReducer from "../reducers/genres/genresReducer";

import "../index.css";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { getGenresThunk } from "../reducers/genres/genresThunk";
import SettingsReducer from "../reducers/settings/SettingsReducer";
axios.defaults.baseURL = "https://api.themoviedb.org/";
axios.defaults.headers.Authorization = `Bearer ${process.env.REACT_APP_API_TOKEN}`;
const store = configureStore({
  reducer: {
    SettingsReducer,
    genresReducer,
  },
});
const { lang } = store.getState().SettingsReducer;

store.dispatch(getGenresThunk(`?language=${lang}`));
export { store, BrowserRouter, Drawer, App, React, Provider };
