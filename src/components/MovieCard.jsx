import propTypes from 'prop-types';
import { fetchMovieDetails } from './js/fetchMovies';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import AppCSS from './css/App.module.css';
import MovieCardCSS from './css/MovieCard.module.css';

export const MovieCard = ({ movieId }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [score, setScore] = useState(0);
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setTitle(result.title);
        setImage(
          result.poster_path !== null
            ? `https://image.tmdb.org/t/p/w500` + result.poster_path
            : ''
        );
        setScore(result.vote_average);
        setGenres(result.genres);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div className={MovieCardCSS.MovieCard}>
      {image ? (
        <img className={MovieCardCSS.MovieImage} src={image} alt="" />
      ) : (
        <div className={AppCSS.NoImageDisclamer}>No Image</div>
      )}
      <h2 className={MovieCardCSS.MovieTitle}>{title}</h2>
      <p className={MovieCardCSS.MovieRating}>
        Use Score: {Math.floor(score * 10)}%
      </p>
      <h4 className={MovieCardCSS.MovieGenresHeader}>Genres</h4>
      <ul className={MovieCardCSS.MovieGenres}>
        {genres.map(genre => (
          <li className={MovieCardCSS.MovieGenre} key={genre.id}>
            {genre.name}
          </li>
        ))}
      </ul>
      <NavLink className={MovieCardCSS.LearnMoreLink} to={`/movies/${movieId}`}>
        Learn more
      </NavLink>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movieId: propTypes.number.isRequired,
};
