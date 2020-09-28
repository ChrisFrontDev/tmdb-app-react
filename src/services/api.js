import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'd7a6fb0865fc2ba5d13939513b4a781d';

const api = axios.create({ baseURL: BASE_URL });

export const getTrendingFilms = async () => {
  const res = await api.get('/trending/movie/week', {
    params: { api_key: API_KEY },
  });
  return res;
};

export const getMovieGenres = async () => {
  try {
    const response = await api.get(
      `genre/movie/list?api_key=${API_KEY}&language=en-US`,
    );

    return response.data.genres;
  } catch (error) {
    throw new Error(error);
  }
};

export const getMovieByGenre = async genreId => {
  try {
    const response = await api.get(
      `discover/movie?api_key=${API_KEY}&with_genres=${genreId}`,
    );
    return response.data.results;
  } catch (error) {
    throw new Error(error);
  }
};

const getSearchMovies = async searchItem => {
  const movieUrl = `search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${searchItem}&page=1&include_adult=false`;
  const tvUrl = `search/tv?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&page=1&query=${searchItem}&include_adult=false`;

  try {
    const responses = await Promise.all([
      api.get(movieUrl).then(response => response.data.results),
      api.get(tvUrl).then(response => response.data.results),
    ]);

    return [...responses[0], ...responses[1]];
  } catch (error) {
    return error;
  }
};
