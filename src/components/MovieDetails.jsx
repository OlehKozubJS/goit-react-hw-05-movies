import { fetchMovieDetails } from './js/fetchMovies';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(searchQuery);
        setMovies(result.results);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieDetails();
  }, [searchQuery]);

  return (
    <div>
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
