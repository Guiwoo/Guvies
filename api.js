import axios from "axios";

const API_KEY = "2384348b5a6b3811901d3b50c7882207";

const makeRequest = (path, params) =>
  axios.get(`https://api.themoviedb.org/3/${path}`, {
    params: {
      ...params,
      api_key: API_KEY,
    },
  });

export const movieApi = {
  nowPalying: () => makeRequest("/movie/now_playing"),
  popular: () => makeRequest("/movie/popular"),
  upcoming: () => makeRequest("/movie/upcoming", { region: "kr" }),
  search: (query) => makeRequest("/search/movie", { query }),
  movie: (id) => makeRequest(`/movie/${id}`),
  discover: () => makeRequest("/discover/movie"),
};

export const tvApi = {
  today: () => makeRequest("/tv/airing_today"),
  thisWeek: () => makeRequest("/tv/on_the_air"),
  topRated: () => makeRequest("/tv/top_rated"),
  search: (word) => makeRequest(),
  show: (id) => makeRequest(),
};
