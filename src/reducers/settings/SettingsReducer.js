import { createSlice } from "@reduxjs/toolkit";
import { getLanguagesThunk } from "./SettingsThunk";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    lang: "en",
    languages: [],
  },
  reducers: {
    updateLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLanguagesThunk.fulfilled, (state, { payload }) => {
      state.languages = payload;
    });
  },
});
export default settingsSlice.reducer;
export const { updateLang } = settingsSlice.actions;
