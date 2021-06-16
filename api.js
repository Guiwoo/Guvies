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
  movie: (id) =>
    getEverythings(`/movie/${id}`, { append_to_response: "videos" }),
  discover: () => getEverythings("/discover/movie"),
};

export const tvApi = {
  today: () => getEverythings("/tv/airing_today"),
  thisWeek: () => getEverythings("/tv/on_the_air"),
  topRated: () => getEverythings("/tv/top_rated"),
  popular: () => getEverythings("/tv/popular"),
  search: (query) => getEverythings("/search/tv", { query }),
  show: (id) => getEverythings(`/tv/${id}`, { append_to_response: "videos" }),
};

export const apiImage = (
  path,
  defaultPoster = "https://drive.google.com/file/d/1IKTXX0GMEcHDYOdGoyaUgJKyaSUVVmby/view?usp=sharing"
) => (path ? `https://image.tmdb.org/t/p/w500${path}` : defaultPoster);
