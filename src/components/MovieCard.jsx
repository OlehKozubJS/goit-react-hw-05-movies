import propTypes from 'prop-types';
import { fetchMovieGenres } from './js/fetchMovies';
import { NavLink, useLocation } from 'react-router-dom';
import MovieCardCSS from './css/MovieCard.module.css';
import { useEffect, useState } from 'react';
import imageFile from './images/template-image.jpg';

export const MovieCard = ({ movie }) => {
  const location = useLocation();
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getGenresByIds = async () => {
      try {
        let result = await fetchMovieGenres(movie.genre_ids);
        setGenres(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getGenresByIds();
  }, []);

  return (
    <div className={MovieCardCSS.MovieCard}>
      <img
        className={MovieCardCSS.MovieImage}
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500` + movie.poster_path
            : imageFile
        }
        alt=""
      />
      <h2 className={MovieCardCSS.MovieTitle}>{movie.title}</h2>
      <p className={MovieCardCSS.MovieRating}>
        Use Score: {Math.floor(movie.vote_average * 10)}%
      </p>
      <h4 className={MovieCardCSS.MovieGenresHeader}>Genres</h4>
      <ul className={MovieCardCSS.MovieGenres}>
        {genres.map(genre => (
          <li className={MovieCardCSS.MovieGenre} key={genre.id}>
            {genre.name}
          </li>
        ))}
      </ul>
      <NavLink
        className={MovieCardCSS.LearnMoreLink}
        to={`/movies/${movie.id}`}
        state={{ from: location }}
      >
        Learn more
      </NavLink>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: propTypes.shape({
    id: propTypes.number.isRequired,
    backdrop_path: propTypes.string,
    genre_ids: propTypes.arrayOf(propTypes.number.isRequired),
    title: propTypes.string.isRequired,
    vote_average: propTypes.number.isRequired,
  }),
};
