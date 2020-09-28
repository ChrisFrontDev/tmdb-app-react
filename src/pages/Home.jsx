import React, { useEffect, useState } from 'react';

import FilmListSlider from 'components/FilmListSlider';
import Navbar from 'components/Navbar';
import { getTrendingFilms, getMovieGenres } from 'services/api';

const Home = () => {
  const [genres, setGenres] = useState([]);

  const [trendings, setTrendings] = useState([]);

  const [loadingGenres, setLoadingGenres] = useState(true);
  const [loadingTrendings, setLoadingTrendings] = useState(true);

  const getTrending = async () => {
    const res = await getTrendingFilms();
    setTrendings(res);
    setLoadingTrendings(false);
  };

  const getGenre = async () => {
    const res = await getMovieGenres();
    setGenres(res);
    setLoadingGenres(false);
  };

  useEffect(() => {
    getGenre();
    getTrending();
  }, []);

  return (
    <>
      {!loadingGenres ? (
        genres.map(genre => <FilmListSlider key={genre.id} genre={genre} />)
      ) : (
        <h1>Loading</h1>
      )}

      {/* {!loadingTrendings ? (
        trendings.map(genre => <FilmListSlider key={genre.id} genre={genre} />)
      ) : (
        <h1>Loading</h1>
      )} */}
    </>
  );
};

export default Home;

// Request URL: https://api.themoviedb.org/3/discover/movie?api_key=d7a6fb0865fc2ba5d13939513b4a781d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28
