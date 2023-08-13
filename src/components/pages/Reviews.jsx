import { fetchMovieReviews } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppCSS from '../css/App.module.css';
import ReviewsCSS from '../css/Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(true);

  useEffect(() => {
    const getMovieReviews = async () => {
      setIsLoading(true);
      try {
        const result = await fetchMovieReviews(movieId);
        if (result.cast.length === 0) {
          setHasLoaded(false);
        } else {
          setReviews(result.results);
        }
      } catch {
        console.log('The fetch has failed');
      } finally {
        setIsLoading(false);
      }
    };
    getMovieReviews();
  }, [movieId]);

  return isLoading ? (
    <div className={AppCSS.Disclaimer}>Loading...</div>
  ) : !hasLoaded ? (
    <div className={AppCSS.Disclaimer}>No Actors Found</div>
  ) : (
    <ul className={ReviewsCSS.ReviewCards}>
      {reviews.map(({ id, author, content }) => (
        <li className={ReviewsCSS.ReviewCard} key={id}>
          <h5 className={ReviewsCSS.ReviewAuthor}>Author: {author}</h5>
          <p className={ReviewsCSS.ReviewText}>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
