import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  // display: flex;
  // justify-content: space-between;
  // align-items: center;
  padding: 0 20px;
  width: 100%;
  
  @media ${props => props.theme.media.desktop} {
    display: none;
  }
  }
  
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const NavItem = styled.li`
  padding: 8px;
`;

export const Link = styled(NavLink)`
  list-style: none;
  background-color: transparent;
  
  & svg {
    stroke: ${props => props.theme.colors.logo};
    width: 24px;
    height: 24px;
  }
`;
