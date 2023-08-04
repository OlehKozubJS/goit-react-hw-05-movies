import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchFavouriteMovies } from './js/fetchMovies';

export const Home = () => {
  const favouriteMovies = fetchFavouriteMovies();

  return (
    <div>
      <h1>Trending Today</h1>
      <ul>
        {favouriteMovies.map(favouriteMovie => (
          <li key{}>{favouriteMovie.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
