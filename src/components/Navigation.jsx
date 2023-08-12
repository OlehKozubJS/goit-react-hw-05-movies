import { fetchMovieDetails } from '../js/fetchMovies';
import { Suspense, useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import MovieDetailsCSS from '../css/MovieDetails.module.css';
import AppCSS from '../css/App.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: rgb(75, 200, 75);
    color: rgb(245, 250, 245);
  }
`;

export const Navigation = ({ style, links }) => {

  return (
  <nav className={MovieDetailsCSS.MovieDetailsInnerNavigation}>
            {links.map((link, linkIndex) => (
            <StyledLink
                className={MovieDetailsCSS.MovieDetailsInnerNavigationLink}
                to={link}
            >
                Back to movies
            </StyledLink>
        )}
  </nav>
  );
};

export default Navigation;
