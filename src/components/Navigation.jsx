import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MovieDetailsCSS from './css/MovieDetails.module.css';

const sls = `
  &.active {
    background-color: rgb(75, 200, 75);
    color: rgb(245, 250, 245);
  }
`;

const StyledLink = styled(NavLink)`
  ${sls}
`;

export const Navigation = ({ links }) => {
  return (
    <nav className={MovieDetailsCSS.MovieDetailsInnerNavigation}>
      {links.map((link, linkIndex) => (
        <StyledLink
          key={linkIndex}
          className={MovieDetailsCSS.MovieDetailsInnerNavigationLink}
          to={link.to}
        >
          {link.title}
        </StyledLink>
      ))}
    </nav>
  );
};

export default Navigation;
