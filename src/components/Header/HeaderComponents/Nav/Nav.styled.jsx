import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: none;

  @media ${props => props.theme.media.desktop} {
    display: block;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  margin: 0 auto;
  padding: 12px 12px 12px 55px;
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
  &:hover {
    color: #3385ff;
    text-decoration: underline;
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  &:active {
    color: #1656b6;
    text-decoration: none;
  }
`;