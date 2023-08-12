import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  &.active {
    background-color: rgb(75, 200, 75);
    color: rgb(245, 250, 245);
  }
`;

export const Navigation = ({ style, links }) => {
  return (
    <nav className={style}>
      {links.map((link, linkIndex) => (
        <StyledLink key={linkIndex} className={style} to={link.to}>
          {link.title}
        </StyledLink>
      ))}
    </nav>
  );
};

export default Navigation;
