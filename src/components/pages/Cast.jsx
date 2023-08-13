import { fetchMovieCredits } from '../js/fetchMovies';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import AppCSS from '../css/App.module.css';
import CastCSS from '../css/Cast.module.css';
import imageFile from '../images/template-image.jpg';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    const getMovieCast = async () => {
      try {
        const result = await fetchMovieCredits(movieId);
        setCredits(result.cast);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieCast();
  }, [movieId]);

  return credits.length === 0 ? (
    <div className={AppCSS.Disclaimer}>No Actors Found</div>
  ) : (
    <ul className={CastCSS.ActorCards}>
      {credits.map(({ id, profile_path, original_name, character }) => (
        <li className={CastCSS.ActorCard} key={id}>
          {profile_path !== null ? (
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
          ) : (
            <div className={AppCSS.NoImageDisclaimer}>No Image</div>
          )}
          <h5 className={CastCSS.ActorName}>{original_name}</h5>
          <p className={CastCSS.ActorCharacter}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
