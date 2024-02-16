import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media ${props => props.theme.media.bigMobile} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media ${props => props.theme.media.tablet} {
    gap: 20px;
  }
`;

export const MenuItem = styled.div`
  position: relative;
  flex-basics: ${props => (props.$isHomePage ? '100%' : 'calc(50% - 4px)')};

  height: 160px;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  display: ${props =>
    props.$isMenuOpen || props.$isFirstItem ? 'flex' : 'none'};
  opacity: ${props => (props.$isMenuOpen || props.$isFirstItem ? '1' : '0')};

  img {
    transition: transform 0.2s ease-out;
  }

  &:hover,
  &:active {
    img {
      transform: scale(1.2);
      transition: transform 0.2s ease-out;
    }
  }

  @media ${props => props.theme.media.bigMobile} {
    display: flex;
    opacity: 1;
    // max-height: 160px;
  }

  @media ${props => props.theme.media.tablet} {
    width: calc(50% - 20px);
    flex-grow: 1;
    // max-height: 184px;
  }

  @media ${props => props.theme.media.desktop} {
    width: calc(25% - 20px);
  }

  img {
    object-fit: cover;
  }

  .menu-item-title {
    position: absolute;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.section};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.white};
    text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.48);
  }
`;

export const Link = styled(NavLink)`
  display: flex;
  align-items: center;
`;
