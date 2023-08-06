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
        setReviews(result.results);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieReviews();
  }, []);

  return (
    <ul>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <h5>Author: {author}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
