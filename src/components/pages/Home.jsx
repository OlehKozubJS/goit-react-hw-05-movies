import { useEffect, useState } from 'react';
import { fetchFavouriteMovies } from '../js/fetchMovies';
import { Link, useLocation } from 'react-router-dom';

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
        {favouriteMovies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{ from: location }}>
              {title || name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
