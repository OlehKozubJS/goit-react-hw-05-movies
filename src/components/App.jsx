import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AppCSS from '../components/module.css/App.module.css';

const lazyImport = newComponent => {
  return lazy(() => import(`./${newComponent}`));
};

const Home = lazyImport(`Home`);
const Movies = lazyImport(`Movies`);
const MovieDetails = lazyImport(`MovieDetails`);
const Cast = lazyImport(`Cast`);
const Reviews = lazyImport(`Reviews`);

export const App = () => {
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
      <nav className={AppCSS.navigation}>
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
