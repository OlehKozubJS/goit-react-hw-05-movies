import { lazy, Suspense } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import AppCSS from '../components/module.css/app.module.css';
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
    background-color: blue;
  }
`;

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
        <StyledLink className={AppCSS.navigationLink} to="/">
          Home
        </StyledLink>
        <StyledLink className={AppCSS.navigationLink} to="/movies">
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
  );
};
