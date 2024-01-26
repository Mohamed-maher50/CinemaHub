import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/getData";

export const getGenresThunk = createAsyncThunk(
  "genres/get",
  async (query = "", { rejectWithValue }) => {
    const [data, err] = await getData(`/3/genre/movie/list${query}`);
    if (err) return rejectWithValue(err);
    return data;
  }
);
