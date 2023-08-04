import { useEffect, useState } from 'react';
import { fetchFavouriteMovies } from './js/fetchMovies';

export const Home = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const getFavouriteMovies = async () => {
      try {
        setFavouriteMovies(await fetchFavouriteMovies().results);
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
          <li key={favouriteMovie.id}>{favouriteMovie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
