import axios from "axios";

export const getData = async (url) => {
  try {
    const { data } = await axios.get(`${url}`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
export const SearchMovies = async (query) => {
  try {
    const { data } = await axios.get(`/3/search/movie${query}`);

    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
