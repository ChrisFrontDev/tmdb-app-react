import React, { useState } from 'react';

const MovieCard = ({ movie }) => {
  const [filmhover, setfilmhover] = useState(true);

  return (
    <div
      className="movie-card"
      aria-hidden
      role="button"
      // onMouseEnter={() => setfilmhover(true)}
      // onMouseLeave={() => setfilmhover(false)}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500/${
          movie.backdrop_path ? movie.backdrop_path : movie.poster_path
        }`}
        alt={movie.title}
      />

      {filmhover && (
        <div
          style={{
            position: 'absolute',
            bottom: '3px',
            backgroundColor: ' rgba(0, 0, 0, 0.4)',
            width: '100%',
            height: '50%',
          }}
        >
          {movie.title}
        </div>
      )}
    </div>
  );
};

export default MovieCard;
