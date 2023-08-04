import { fetchMovieByName } from './js/fetchMovies';
import { useEffect, useState } from 'react';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState([]);
  const [movies, setMovies] = useState([]);

  const handleSubmit = event => {
    event.preventDefault();
    setSearchQuery(event.currentTarget.elements.movieNameInput.value);
    event.currentTarget.reset();
  };

  useEffect(() => {
    const getMovieByName = async () => {
      try {
        const result = await fetchMovieByName();
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
          <li key={movie.id}>{movie.title || movie.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Movies;
