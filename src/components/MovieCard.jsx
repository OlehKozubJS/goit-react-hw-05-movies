import propTypes from 'prop-types';
import { fetchMovieDetails } from './js/fetchMovies';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
    <div>
      <div>
        {image && (
          <img style={{ display: 'block' }} width="100px" src={image} alt="" />
        )}
        <h2>{title}</h2>
        <p>Use Score: {Math.floor(score * 10)}%</p>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
        <NavLink to={`/movies/${movieId}`}>Detailed Information</NavLink>
      </div>
    </div>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movieId: propTypes.number.isRequired,
};
