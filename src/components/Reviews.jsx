import { fetchMovieReviews } from './js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getMovieReviews = async () => {
      try {
        const result = await fetchMovieReviews(movieId);
        setReviews(result);
        console.log();
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieReviews();
  }, []);

  return <ul></ul>;
};

export default Reviews;
/*
      {reviews.map(({ id, name, text }) => (
        <li key={id}>
          <h5>{name}</h5>
          <p>Character: {text}</p>
        </li>
      ))}
*/
