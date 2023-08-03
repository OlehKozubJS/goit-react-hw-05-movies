import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { fetchMovies } from './js/fetchMovies';

const lazyImport = newComponent => {
  return lazy(
    () =>
      new Promise((resolve, reject) => {
        import(`./${newComponent}`)
          .then(result => {
            resolve(result);
          })
          .catch(reject);
      })
  );
};

const Home = lazyImport(`Home`);
const Movies = lazyImport(`Movies`);
const MovieDetails = lazyImport(`MovieDetails`);
const Cast = lazyImport(`Cast`);
const Reviews = lazyImport(`Reviews`);

export const App = () => {
  fetchMovies();
  return (
    <Suspense
      style={{
        display: 'flex',
        justifyContent: 'center',
        fontSize: 40,
        color: '#010101',
      }}
      fallback={<div>Loading...</div>}
    >
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Movies</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Routes>
    </Suspense>
  );
};
