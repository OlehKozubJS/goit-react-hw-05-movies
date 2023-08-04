import { useEffect, useState } from 'react';
import { fetchFavouriteMovies } from './js/fetchMovies';

export const Home = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const getFavouriteMovies = async () => {
      try {
        const result = await fetchFavouriteMovies();
        setFavouriteMovies(result.results);
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
        {favouriteMovies.map(favouriteMovie => (
          <li key={favouriteMovie.id}>
            {favouriteMovie.title || favouriteMovie.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
