import { createSlice } from "@reduxjs/toolkit";

const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    lang: "en",
  },
  reducers: {
    updateLang: (state, { payload }) => {
      state.lang = payload;
    },
  },
});
export default settingsSlice.reducer;
