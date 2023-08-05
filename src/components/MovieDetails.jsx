import { fetchMovieDetails } from './js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movieDetails, setMovieDetails] = useState();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        console.log(movieId);
        setMovieDetails(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieDetails();
  }, [movieId]);

  return (
    <div>
      <Link to={backLinkHref}>Back to movies</Link>
      <h2>{movieDetails.title}</h2>
      <p></p>
      <h3>Overview</h3>
      <p></p>
      <h4>Genres</h4>
      <p></p>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
