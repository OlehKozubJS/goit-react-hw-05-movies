import { fetchMovieByName } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';

export const Movies = () => {
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
        let result = await fetchMovieByName(searchQuery);
        result = await result.results;
        result = await result.filter(resultItem => !!resultItem.poster_path);
        setMovies(result);
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
