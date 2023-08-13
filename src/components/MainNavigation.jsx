import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MovieDetailsCSS from './css/MovieDetails.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: rgb(125, 125, 250);
    color: rgb(245, 245, 250);
  }
`;

export const MainNavigation = ({ links }) => {
  return (
    <nav className={MovieDetailsCSS.Navigation}>
      {links.map((link, linkIndex) => (
        <StyledLink
          key={linkIndex}
          className={MovieDetailsCSS.NavigationLink}
          to={link.to}
        >
          {link.title}
        </StyledLink>
      ))}
    </nav>
  );
};

export default Navigation;
