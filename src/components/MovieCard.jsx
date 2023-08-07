import propTypes from 'prop-types';
import { fetchMovieDetails } from '../js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { NavLink } from 'react-outer-dom';

export const MovieCard = ({ movieId }) => {
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [score, setScore] = useState(0);
  const [genres, setGenres] = useState([]);
  const backLinkHref = location.state?.from ?? '/movies';

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setTitle(result.title);
        setImage(result.poster_path);
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
        <NavLink to={backLinkHref}>Back to movies</NavLink>
        <img
          style={{ display: 'block' }}
          width="100px"
          src={`https://image.tmdb.org/t/p/w500` + image}
          alt=""
        />
        <h2>{title}</h2>
        <p>Use Score: {Math.floor(score * 10)}%</p>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetails;
