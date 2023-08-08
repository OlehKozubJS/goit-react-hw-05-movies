import { fetchMovieByName } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';
import MoviesCSS from '../module.css/Movies.module.css';

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
        setMovies(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieByName();
  }, [searchQuery]);

  return (
    <div>
      <form className={MoviesCSS.MovieSearch} onSubmit={handleSubmit}>
        <input
          className={MoviesCSS.MovieSearchInput}
          name="movieNameInput"
          type="text"
        />
        <button className={MoviesCSS.MovieSearchSubmit} type="submit">
          Search
        </button>
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
