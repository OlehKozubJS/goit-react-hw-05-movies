import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import AppCSS from './css/App.module.css';
import { MainNavigation } from './MainNavigation';

const lazyImport = newComponent => {
  return lazy(() => import(`./pages/${newComponent}`));
};

const Home = lazyImport(`Home`);
const Movies = lazyImport(`Movies`);
const MovieDetails = lazyImport(`MovieDetails`);
const Cast = lazyImport(`Cast`);
const Reviews = lazyImport(`Reviews`);
const links = [
  { to: '/', title: 'Home' },
  { to: '/movies', title: 'Movies' },
];

export const App = () => {
  return (
    <div className={AppCSS.App}>
      <Suspense fallback={<div className={AppCSS.Disclaimer}>Loading...</div>}>
        <MainNavigation links={links}></MainNavigation>
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
    </div>
  );
};
