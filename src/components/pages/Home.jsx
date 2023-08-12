import { useEffect, useState } from 'react';
import { fetchFavouriteMovies } from '../js/fetchMovies';
import MovieCards from 'components/MovieCard';
import HomeCSS from '../css/Home.module.css';

export const Home = () => {
  const [favouriteMovies, setFavouriteMovies] = useState([]);

  useEffect(() => {
    const getFavouriteMovies = async () => {
      try {
        let result = await fetchFavouriteMovies();
        result = await result.results;
        setFavouriteMovies(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getFavouriteMovies();
  }, []);

  return (
    <div className={HomeCSS.Home}>
      <h1 className={HomeCSS.MainHeadline}>Trending Today</h1>
      <MovieCards movies={favouriteMovies} />
    </div>
  );
};

export default Home;
