import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  min-width: 128px;
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const AboutItem = styled.li`
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