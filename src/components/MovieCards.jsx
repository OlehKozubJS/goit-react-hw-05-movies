import MovieCard from 'components/MovieCard';
import MoviesCSS from './css/Movies.module.css';
import propTypes from 'prop-types';

export const MovieCards = ({ movies }) => {
  return (
    <ul className={MoviesCSS.MovieCards}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieCards;

MovieCards.propTypes = {
  movies: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.number.isRequired,
      backdrop_path: propTypes.string,
      genre_ids: propTypes.arrayOf(propTypes.number.isRequired),
      title: propTypes.string.isRequired,
      vote_average: propTypes.number.isRequired,
    })
  ).isRequired,
};
