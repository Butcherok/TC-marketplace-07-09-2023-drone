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
  color: #212121;
  list-style: none;
  text-decoration: none;
  cursor: pointer;
  &:hover,
  &:focus {
    color: tomato;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &.active {
    color: orange;
  }
`;

export const StyledUserNavIcon = styled.img`
  display: inline-block;
  width: 24px;
  height: 24px;
`;