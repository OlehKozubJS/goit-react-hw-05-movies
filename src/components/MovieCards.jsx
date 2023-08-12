import MovieCard from 'components/MovieCard';
import MoviesCSS from '../css/Movies.module.css';
import propTypes from 'prop-types';

export const MovieCards = ({ movies }) => {
  return (
    <ul className={MoviesCSS.MovieCards}>
      {movies.map(movie => (
        <MovieCard key={id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieCards;
