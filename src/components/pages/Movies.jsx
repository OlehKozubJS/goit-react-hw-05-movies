import { fetchMovieByName, fetchMovieGenres } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm';
import MovieCards from 'components/MovieCards';

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('searchData') ?? '';

  useEffect(() => {
    const getMovieByName = async () => {
      try {
        let result = await fetchMovieByName(searchQuery);
        result = await result.results;
        //console.log(result);
        console.log(fetchMovieGenres([12, 18, 27]));
        setMovies(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieByName();
  }, [searchQuery]);

  const updateSearchParams = searchData => {
    setSearchParams(searchData !== '' ? { searchData } : {});
  };

  return (
    <div>
      <SearchForm value={searchQuery} onSubmit={updateSearchParams} />
      {/*searchParams && <MovieCards movies={movies} />*/}
    </div>
  );
};

export default Movies;
