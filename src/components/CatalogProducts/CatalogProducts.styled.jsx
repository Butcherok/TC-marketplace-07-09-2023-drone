import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  
  

  @media ${props => props.theme.media.bigMobile} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${props => props.theme.media.tablet} {
    gap: 20px;
  }
`;

export const MenuContainer = styled.div`
  padding: 0 4px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 8px;
  width: 100%;
`;

export const MenuItem = styled.div`
  position: relative;
  width: calc(50% - 4px);
  height: 72px;
  cursor: pointer;
  border-radius: 5px;
  overflow: hidden;

  img {
    transition: transform 0.2s ease-out;
    object-fit: cover;
    transform: scale(1.5)
  }

  &:hover,
  &:active {
    img {
      transform: scale(1.8);
      transition: transform 0.2s ease-out;
    }
  }

  .menu-item-title {
    position: absolute;
    bottom: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
    font-size: 20px;
    line-height: ${props => props.theme.lineHeights.section};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.white};
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.48);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  width: 100;
  height: 100%;
`;
