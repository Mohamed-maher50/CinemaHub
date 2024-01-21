import axios from "axios";

export const Get_Languages = async () => {
  try {
    const { data } = await axios.get(`/3/configuration/languages`);
    return [data, null];
  } catch (error) {
    return [null, error];
  }
};
