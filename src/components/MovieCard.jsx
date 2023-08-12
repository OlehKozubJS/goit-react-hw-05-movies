import propTypes from 'prop-types';
import { fetchMovieGenres } from './js/fetchMovies';
import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import AppCSS from './css/App.module.css';
import MovieCardCSS from './css/MovieCard.module.css';

export const MovieCard = ({
  backdrop_path,
  title,
  vote_average,
  genre_ids,
}) => {
  const location = useLocation();

  return (
    <div className={MovieCardCSS.MovieCard}>
      {backdrop_path ? (
        <img className={MovieCardCSS.MovieImage} src={backdrop_path} alt="" />
      ) : (
        <div className={AppCSS.NoImageDisclaimer}>No Image</div>
      )}
      <h2 className={MovieCardCSS.MovieTitle}>{title}</h2>
      <p className={MovieCardCSS.MovieRating}>
        Use Score: {Math.floor(vote_average * 10)}%
      </p>
      <h4 className={MovieCardCSS.MovieGenresHeader}>Genres</h4>
      <ul className={MovieCardCSS.MovieGenres}>
        {fetchMovieGenres(genre_ids).map(genre => (
          <li className={MovieCardCSS.MovieGenre} key={genre.id}>
            {genre.name}
          </li>
        ))}
      </ul>
      <NavLink
        className={MovieCardCSS.LearnMoreLink}
        to={`/movies/${movieId}`}
        state={{ from: location }}
      >
        Learn more
      </NavLink>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movieId: propTypes.number.isRequired,
};

const instance = {
  backdrop_path: '/iEFuHjqrE059SmflBva1JzDJutE.jpg',
  genre_ids: [16, 10751, 28, 14, 10749],
  title: 'Miraculous: Ladybug & Cat Noir, The Movie',
  vote_average: 7.9,
};
