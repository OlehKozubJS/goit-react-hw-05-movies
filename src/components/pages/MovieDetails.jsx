import { fetchMovieDetails } from '../js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsCSS from '../css/MovieDetails.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: rgb(75, 200, 75);
    color: rgb(245, 250, 245);
  }
`;

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
      <nav className={MovieDetailsCSS.MovieDetailsInnerNavigation}>
        <StyledLink
          className={MovieDetailsCSS.MovieDetailsInnerNavigationLink}
          to={backLinkHref}
        >
          Back to movies
        </StyledLink>
        <StyledLink
          className={MovieDetailsCSS.MovieDetailsInnerNavigationLink}
          to="cast"
        >
          Cast
        </StyledLink>
        <StyledLink
          className={MovieDetailsCSS.MovieDetailsInnerNavigationLink}
          to="reviews"
        >
          Reviews
        </StyledLink>
      </nav>
      <div className={MovieDetailsCSS.MovieInfo}>
        {image ? (
          <img className={MovieDetailsCSS.MovieImage} src={image} alt="" />
        ) : (
          <div className={MovieDetailsCSS.NoImageDisclamer}>No Image</div>
        )}
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
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
