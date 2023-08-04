import { fetchMovieDetails } from './js/fetchMovies';
import { Suspense, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { id } = useParams;

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(id);
        setMovies(result.results);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieDetails();
  }, []);

  return (
    <div>
      <Link to="/movies"></Link>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
