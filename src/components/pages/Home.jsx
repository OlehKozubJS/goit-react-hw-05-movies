import { useEffect, useState } from 'react';
import { fetchFavouriteMovies } from '../js/fetchMovies';
import { useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard';

export const Home = () => {
  const location = useLocation();
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const getFavouriteMovies = async () => {
      try {
        const result = await fetchFavouriteMovies();
        setFavouriteMovies(result.results);
        console.log(result.results);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getFavouriteMovies();
  }, []);

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {favouriteMovies.map(({ id }) => (
          <MovieCard key={id} movieId={id} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
