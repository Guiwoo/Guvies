import axios from "axios";

const API_KEY = "2384348b5a6b3811901d3b50c7882207";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });

const getEverythings = async (path, params = {}) => {
  try {
    const {
      data: { results },
      data,
    } = await makeRequest(path, params);
    return [results || data, null];
  } catch (e) {
    return [null, e];
  }
};

export const movieApi = {
  nowPlaying: () => getEverythings("/movie/now_playing"),
  popular: () => getEverythings("/movie/popular"),
  upcoming: () => getEverythings("/movie/upcoming", { region: "kr" }),
  search: (query) => getEverythings("/search/movie", { query }),
  movie: (id) => getEverythings(`/movie/${id}`),
  discover: () => getEverythings("/discover/movie"),
};

export const tvApi = {
  today: () => getEverythings("/tv/airing_today"),
  thisWeek: () => getEverythings("/tv/on_the_air"),
  topRated: () => getEverythings("/tv/top_rated"),
  popular: () => getEverythings("/tv/popular"),
  search: (query) => getEverythings("/search/tv", { query }),
  show: (id) => getEverythings(`/tv/${id}`),
};

export const apiImage = (path) =>
  path
    ? `https://image.tmdb.org/t/p/w500${path}`
    : "https://images.unsplash.com/photo-1570800658349-c7051f4d6f57?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80";
