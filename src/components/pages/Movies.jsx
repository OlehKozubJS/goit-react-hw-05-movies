import { fetchMovieByName } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import MovieCard from 'components/MovieCard';
import MoviesCSS from '../css/Movies.module.css';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';

export const Movies = () => {
  //const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const getMovieByName = async () => {
      try {
        let result = await fetchMovieByName(searchParams.get('searchQuery'));
        result = await result.results;
        setMovies(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieByName();
  }, [searchParams]);

  const updateSearchParams = searchQuery => {
    setSearchParams(!!searchQuery ? { searchQuery } : {});
  };

  return (
    <div>
      <SearchForm submitFunction={updateSearchParams} />
      {searchParams && (
        <ul className={MoviesCSS.MovieCards}>
          {movies.map(({ id }) => (
            <MovieCard key={id} movieId={id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default Movies;
