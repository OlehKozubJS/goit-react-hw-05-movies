import { fetchMovieDetails } from './js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';

export const Cast = () => {
  const { movieId } = useParams();
  const [image, setImage] = useState('');
  const [name, setName] = useState(0);
  const [character, setCharacter] = useState('');

  useEffect(() => {
    const getMovieDetails = async () => {
      try {
        const result = await fetchMovieDetails(movieId);
        setTitle(result.title);
        setImage(result.poster_path);
        setOverview(result.overview);
        setScore(result.vote_average);
        setGenres(result.genres);
        console.log(result);
      } catch {
        console.log('The fetch has failed');
      }
    };
    getMovieDetails();
  }, []);

  return (
    <div>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500` + image} alt="" />
        <Link to={backLinkHref}>Back to movies</Link>
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
      <Suspense fallback={<div>Loading subpage...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Cast;
