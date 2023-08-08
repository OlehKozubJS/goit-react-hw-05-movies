import { fetchMovieDetails } from '../js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const backLinkHref = location.state?.from ?? '/movies';

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
        setOverview(result.overview);
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
        <Link to={backLinkHref}>Back to movies</Link>
        {image && (
          <img style={{ display: 'block' }} width="100px" src={image} alt="" />
        )}
        <h2>{title}</h2>
        <p>Use Score: {Math.floor(score * 10)}%</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
        <ul>
          {genres.map(genre => (
            <li key={genre.id}>{genre.name}</li>
          ))}
        </ul>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
