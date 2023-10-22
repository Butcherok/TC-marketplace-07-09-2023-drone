import { NavLink } from 'react-router-dom';
import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px 0;

  @media ${(props) => props.theme.media.tablet} {
    width: 768px;
    padding: 24px 32px 0;
  }

  @media ${(props) => props.theme.media.desktop} {
    width: 1280px;
    padding: 24px;
  }
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Nav = styled.nav`
  width: 100%;
  margin: 0 auto;
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  width: 100%;
  margin: 0 auto;
  gap: 24px;
`;

export const NavItem = styled.li`
  padding: 24px;
  font-size: 32px;
  font-weight: 700;
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