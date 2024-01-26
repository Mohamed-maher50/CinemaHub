import { createSlice } from "@reduxjs/toolkit";
import { getGenresThunk } from "./genresThunk";

const genresSlice = createSlice({
  name: "genres",
  initialState: {
    genres: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getGenresThunk.pending, (state, { payload }) => {
      state.isLoading = true;
    });
    builder.addCase(getGenresThunk.fulfilled, (state, { payload }) => {
      if (payload?.genres) state.genres = payload.genres;
      state.isLoading = false;
    });
    builder.addCase(getGenresThunk.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
  },
});
export default genresSlice.reducer;
