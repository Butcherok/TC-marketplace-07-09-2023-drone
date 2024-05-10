import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavMenu = styled.nav`
  width: 100%;
  margin: 0 auto;
  display: flex;
  padding-bottom: 12px;
`;

export const NavMobileList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  gap: 12px;
`;

export const NavMobileItem = styled.li`
  padding: 10.5px 8px;
  width: 100%;
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.title};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.logo};
`;

export const LinkNavMobile = styled(NavLink)`
  font-size: ${props => props.theme.fontSizes.m};
  line-height: ${props => props.theme.lineHeights.title};
  font-weight: ${props => props.theme.fontWeights.normal};
  color: ${props => props.theme.colors.logo};
`;
