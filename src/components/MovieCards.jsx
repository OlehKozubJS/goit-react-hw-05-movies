import MovieCard from 'components/MovieCard';
import MoviesCSS from '../css/Movies.module.css';
import propTypes from 'prop-types';

export const MovieCards = ({}) => {
  return (
    <ul className={MoviesCSS.MovieCards}>
      {movies.map(({ id }) => (
        <MovieCard key={id} movieId={id} />
      ))}
    </ul>
  );
};

export default MovieCards;
