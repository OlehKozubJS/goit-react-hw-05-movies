import { fetchMovieCredits } from '../components/js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppCSS from '../components/css/App.module.css';
import CastCSS from '../components/css/Cast.module.css';
import imageFile from '../components/images/template-image.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(true);

  useEffect(() => {
    const getMovieCast = async () => {
      setIsLoading(true);
      try {
        const result = await fetchMovieCredits(movieId);
        if (result.cast.length === 0) {
          setHasLoaded(false);
        } else {
          setCredits(result.cast);
        }
      } catch {
        console.log('The fetch has failed');
      } finally {
        setIsLoading(false);
      }
    };
    getMovieCast();
  }, [movieId]);

  return isLoading ? (
    <div className={AppCSS.Disclaimer}>Loading...</div>
  ) : !hasLoaded ? (
    <div className={AppCSS.Disclaimer}>No Actors Found</div>
  ) : (
    <ul className={CastCSS.ActorCards}>
      {credits.map(({ id, profile_path, original_name, character }) => (
        <li className={CastCSS.ActorCard} key={id}>
          <img
            className={CastCSS.ActorImage}
            width="100px"
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w500` + profile_path
                : imageFile
            }
            alt=""
          />
          <h5 className={CastCSS.ActorName}>{original_name}</h5>
          <p className={CastCSS.ActorCharacter}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
