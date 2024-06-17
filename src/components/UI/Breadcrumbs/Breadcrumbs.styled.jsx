import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BreadcrumbsStyled = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  // padding: 20px 4px;

  & svg {
    width: 16px;
    height: 16px;
    fill: ${props => props.theme.colors.secondary};
  }

  & span {
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.title};
    color: ${props => props.theme.colors.secondary};
  }
`;

export const BreadcrumbsContainer = styled.div`
  padding: 0 4px;
  width: 100%;
`;

export const Link = styled(NavLink)`
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  color: ${props => props.theme.colors.secondary};
`;
