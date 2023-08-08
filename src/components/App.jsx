import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AppCSS from './css/App.module.css';
import styled from 'styled-components';

const lazyImport = newComponent => {
  return lazy(() => import(`./pages/${newComponent}`));
};

const Home = lazyImport(`Home`);
const Movies = lazyImport(`Movies`);
const MovieDetails = lazyImport(`MovieDetails`);
const Cast = lazyImport(`Cast`);
const Reviews = lazyImport(`Reviews`);

const StyledLink = styled(NavLink)`
  &.active {
    background-color: rgb(125, 125, 250);
    color: rgb(245, 245, 250);
  }
`;

export const App = () => {
  return (
    <div className={AppCSS.App}>
      <Suspense fallback={<div>Loading...</div>}>
        <nav className={AppCSS.Navigation}>
          <StyledLink className={AppCSS.NavigationLink} to="/">
            Home
          </StyledLink>
          <StyledLink className={AppCSS.NavigationLink} to="/movies">
            Movies
          </StyledLink>
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
    </div>
  );
};
