import { fetchMovieCredits } from './js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const result = await fetchMovieCredits(movieId);
        setCredits(result.cast);
        console.log(result.cast);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieCast();
  }, []);

  return (
    <ul>
      Hello!
      {credits.map(credit => {
        <li key={credit.id}>
          Hi
          <img
            src={`https://image.tmdb.org/t/p/w500` + credit.profile_path}
            alt=""
          />
          <h5>{credit.original_name}</h5>
          <p>Character: {credit.character}</p>
        </li>;
      })}
    </ul>
  );
};

export default Cast;
