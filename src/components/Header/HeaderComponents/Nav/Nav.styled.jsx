import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: fit-content;
  margin: 0 auto;
  padding: 12px;
  gap: 28px;
`;

export const NavItem = styled.li`
  font-size: 12px;
  font-weight: 600;
  color: #212121;
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