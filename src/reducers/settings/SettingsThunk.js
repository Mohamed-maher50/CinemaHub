import { createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../api/getData";

export const getLanguagesThunk = createAsyncThunk(
  "settings/languages/get",
  async (_, { rejectWithValue }) => {
    const [data, err] = await getData(`/3/configuration/languages`);
    if (err) return rejectWithValue(err);
    return data;
  }
);
