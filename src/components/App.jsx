import { lazy, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('./Home'));
const Movies = lazy(() => import('./Movies'));
const MovieDetails = lazy(() => import('./MovieDetails'));
const Cast = lazy(() => import('./Cast'));
const Reviews = lazy(() => import('./Reviews'));

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
