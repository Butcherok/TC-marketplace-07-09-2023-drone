import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  width: fit-content;
  gap: 16px;
`;

export const NavItem = styled.li`
  padding: 8px;
`;

export const Link = styled(NavLink)`
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  stroke: #1D1F36;
  &:hover svg use{
    stroke: #3385FF;
    transform: scale(1.05);
  }

  &:active svg use{
    stroke: #1656b6;
  }
`;