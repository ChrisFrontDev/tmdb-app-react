/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState, useCallback } from 'react';

import Swiper from 'react-id-swiper';
import { Dialog } from 'primereact/dialog';

import MovieCard from 'components/MovieCard';

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

  const [film, setFilm] = useState({});

  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const getMovies = async () => {
    const res = await getMovieByGenre(genre.id);
    setFilms(res);
    setLoading(false);
  };

  const handleModal = film => {
    setFilm(film);
    setShowModal(true);
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
            <Swiper {...params}>
              {films.map(movie => (
                <span
                  role="button"
                  key={movie.id}
                  aria-label="movie Card "
                  onClick={() => handleModal(movie)}
                >
                  <MovieCard movie={movie} />
                </span>
              ))}
            </Swiper>
          </div>
        </div>
      )}

      <Dialog
        header={film.title}
        visible={showModal}
        modal
        onHide={e => setShowModal(false)}
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.966)  ${
            window.innerWidth > 600 ? '35%' : '55%'
          }, transparent), url(https://image.tmdb.org/t/p/original/${
            film.backdrop_path ? film.backdrop_path : film.poster_path
          })`,
          backgroundSize: 'cover',
          minHeight: '568px',
          width: '100vw',
        }}
      >
        <p style={{ width: window.innerWidth > 600 ? '40%' : '65%' }}>
          {film.overview}
        </p>
      </Dialog>
    </>
  );
};

export default FilmListSlider;
