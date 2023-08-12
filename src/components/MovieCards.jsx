import MovieCard from 'components/MovieCard';
import MoviesCSS from '../css/Movies.module.css';
import propTypes from 'prop-types';

export const MovieCards = ({}) => {
  return (
    <div>
      <SearchForm value={searchQuery} onSubmit={updateSearchParams} />
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

export default MovieCards;
