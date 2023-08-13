import { fetchMovieDetails } from '../js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsCSS from '../css/MovieDetails.module.css';
import AppCSS from '../css/App.module.css';
import Navigation from 'components/Navigation';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [score, setScore] = useState(0);
  const [overview, setOverview] = useState('');
  const [genres, setGenres] = useState([]);
  const [backLinkHref] = useState(location.state?.from ?? '/movies');
  const links = [
    { to: backLinkHref, title: 'Back to movies' },
    { to: 'cast', title: 'Cast' },
    { to: 'reviews', title: 'Reviews' },
  ];

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setTitle(result.title);
        setImage(
          result.poster_path !== null
            ? `https://image.tmdb.org/t/p/w500` + result.poster_path
            : '../images/template image.jpg'
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
      <Navigation isMain={false} links={links} />
      <div className={MovieDetailsCSS.MovieInfo}>
        <img className={MovieDetailsCSS.MovieImage} src={image} alt="" />
        <div className={MovieDetailsCSS.MovieTextInfo}>
          <h2 className={MovieDetailsCSS.MovieTitle}>{title}</h2>
          <p className={MovieDetailsCSS.MovieRating}>
            Use Score: {Math.floor(score * 10)}%
          </p>
          <h3 className={MovieDetailsCSS.MovieOverviewHeader}>Overview</h3>
          <p className={MovieDetailsCSS.MovieOverview}>{overview}</p>
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
      <Suspense
        fallback={<div className={AppCSS.Disclaimer}>Loading subpage...</div>}
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
