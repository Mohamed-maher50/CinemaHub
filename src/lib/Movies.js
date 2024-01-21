import axios from "axios";

export const getMovies = async (query) => {
  try {
    const { data } = await axios.get(`/3/discover/movie${query}`);
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
export const Get_movieDetails = async (movie_id, query) => {
  console.log(query);
  try {
    const { data } = await axios.get(
      `/3/movie/${movie_id}${query ? query : ""}`
    );
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
export const Get_movie_videos = async (movie_id, query) => {
  console.log(query);
  try {
    const { data } = await axios.get(`/3/movie/${movie_id}/videos${query}`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
export const Get_movie_cast = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movie_id}/credits?language=en-US`
    );
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
export const Get_movie_Recommendations = async (movie_id) => {
  try {
    const { data } = await axios.get(
      `/3/movie/${movie_id}/recommendations?language=en-US&page=1`
    );
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
