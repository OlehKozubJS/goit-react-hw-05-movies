import { fetchMovieReviews } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppCSS from '../css/App.module.css';
import ReviewsCSS from '../css/Reviews.module.css';

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
  }, [movieId]);

  return (
    <ul className={ReviewsCSS.ReviewCards}>
      {reviews.map(({ id, author, content }) => (
        <li className={ReviewsCSS.ReviewCard} key={id}>
          <h5>Author: {author}</h5>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
