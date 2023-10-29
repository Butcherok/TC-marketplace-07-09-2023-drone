import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
`;

export const AboutTitle = styled.h4`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
`;

export const AboutList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  width: max-content;

`;

export const AboutItem = styled.li`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.normal};
`;

export const Link = styled(NavLink)`
  color: ${props => props.theme.colors.primary};
  cursor: pointer;
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.focus};
    transition: all 0.3s ease-in-out;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  &.active {
    color: ${props => props.theme.colors.active};
  }
`;
