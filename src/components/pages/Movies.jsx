import { fetchMovieByName } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Movies = () => {
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    const searchText = event.currentTarget.elements.movieNameInput.value;
    setSearchQuery(searchText);
    event.currentTarget.reset();
  };

  useEffect(() => {
    const getMovieByName = async () => {
      try {
        const result = await fetchMovieByName(searchQuery);
        setMovies(result.results);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieByName();
  }, [searchQuery]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="movieNameInput" type="text" />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`} state={{ from: location }}>
              {movie.title || movie.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
