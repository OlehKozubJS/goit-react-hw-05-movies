import { fetchMovieByName } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';
import MoviesCSS from '../css/Movies.module.css';
import { useSearchParams } from 'react-router-dom';

export const SearchForm = ({ value, submitFunction }) => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = event => {
    event.preventDefault();
    submitFunction(event.currentTarget.elements.movieNameInput.value);
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
  );
};

export default SearchForm;
