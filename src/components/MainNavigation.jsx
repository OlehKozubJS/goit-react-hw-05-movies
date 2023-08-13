import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import AppCSS from './css/App.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: rgb(125, 125, 250);
    color: rgb(245, 245, 250);
  }
`;

export const MainNavigation = ({ links }) => {
  return (
    <nav className={AppCSS.Navigation}>
      {links.map((link, linkIndex) => (
        <StyledLink
          key={linkIndex}
          className={AppCSS.NavigationLink}
          to={link.to}
        >
          {link.title}
        </StyledLink>
      ))}
    </nav>
  );
};

export default MainNavigation;
