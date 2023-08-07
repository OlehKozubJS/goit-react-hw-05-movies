import { fetchMovieByName } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard';

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
        {movies.map(({ id }) => (
          <MovieCard key={id} movieId={id} />
        ))}
      </ul>
    </div>
  );
};

export default Movies;
