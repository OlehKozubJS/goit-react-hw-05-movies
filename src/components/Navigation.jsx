import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MainNavigationCSS from './css/MainNavigation.module.css';
import InnerNavigationCSS from './css/InnerNavigation.module.css';

const StyledLink = styled(NavLink)`
  &.active {
    color: rgb(200, 75, 75);
  }
`;

export const Navigation = ({ isMain, links }) => {
  const css = isMain ? MainNavigationCSS : InnerNavigationCSS;

  return (
    <nav className={css.Navigation}>
      {links.map((link, linkIndex) => (
        <StyledLink key={linkIndex} className={css.NavigationLink} to={link.to}>
          {link.title}
        </StyledLink>
      ))}
    </nav>
  );
};

export default Navigation;
