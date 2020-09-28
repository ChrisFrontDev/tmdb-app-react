import React, { useEffect, useState } from 'react';

import Swiper from 'react-id-swiper';

import { getMovieByGenre } from 'services/api';

const params = {
  slidesPerView: 'auto',
  spaceBetween: 30,
  freeMode: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
};

const FilmListSlider = ({ genre }) => {
  const [films, setFilms] = useState([]);
  const [loading, setLoading] = useState(true);

  const getMovies = async () => {
    const res = await getMovieByGenre(genre.id);
    setFilms(res);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <h1>LOADING</h1>
      ) : (
        <div className="p-panel p-component">
          <div className="p-panel-header">
            <span className="p-panel-title" aria-label="pr_id_2_header">
              {genre.name}
            </span>
            <div className="p-panel-icons" />
          </div>

          <div className="p-panel-content">
            <div>
              <Swiper {...params}>
                {films.map(movie => {
                  const movieImageUrl = `https://image.tmdb.org/t/p/w500/${
                    movie.backdrop_path
                      ? movie.backdrop_path
                      : movie.poster_path
                  }`;

                  return (
                    <div
                      aria-hidden
                      role="button"
                      onClick={() => console.log(movie)}
                    >
                      <img src={movieImageUrl} alt={movie.title} />
                    </div>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FilmListSlider;
