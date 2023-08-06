import { fetchMovieDetails } from './js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setCredits(result);
        console.log(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieCast();
  }, []);

  return (
    <ul>
      <li>Hello</li>
    </ul>
  );
};

export default Cast;

/*
      <div>
        <img src={`https://image.tmdb.org/t/p/w500` + image} alt="" />
        <h2>{title}</h2>
        <p>Use Score: {Math.floor(score * 10)}</p>
        <h3>Overview</h3>
        <p>{overview}</p>
        <h4>Genres</h4>
      </div>

      <ul>
        {genres.map(genre => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
*/
