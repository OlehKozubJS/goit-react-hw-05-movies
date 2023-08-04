import { fetchMovieDetails } from './js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/movies';
  const [movieDetils, setMovieDetils] = useState();

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(id);
        setMovieDetils(result.results);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieDetails();
  }, []);

  return (
    <div>
      <Link to={backLinkHref}></Link>
      <h2></h2>
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
