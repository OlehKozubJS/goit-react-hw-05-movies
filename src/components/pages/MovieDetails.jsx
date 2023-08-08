import { fetchMovieDetails } from '../js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsCSS from '../css/MovieDetails.module.css';

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
    <div className={MovieDetailsCSS.MovieDetails}>
      <div className={MovieDetailsCSS.MovieInfo}>
        {image && (
          <img className={MovieDetailsCSS.MovieImage} src={image} alt="" />
        )}
        <div>
          <h2 className={MovieDetailsCSS.MovieTitle}>{title}</h2>
          <p className={MovieDetailsCSS.MovieRating}>
            Use Score: {Math.floor(score * 10)}%
          </p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h4 className={MovieDetailsCSS.MovieGenresHeader}>Genres</h4>
          <ul className={MovieDetailsCSS.MovieGenres}>
            {genres.map(genre => (
              <li className={MovieDetailsCSS.MovieGenre} key={genre.id}>
                {genre.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <nav>
        <Link to={backLinkHref}>Back to movies</Link>
        <Link to="cast">Cast</Link>
        <Link to="reviews">Reviews</Link>
      </nav>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
