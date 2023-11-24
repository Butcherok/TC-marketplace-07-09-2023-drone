import styled from 'styled-components';

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
  display: flex;
  // max-height: 148px;
  transition: all 0.6s ease;
  display: ${props => (props.isMenuOpen || props.isFirstItem ? 'flex' : 'none')};
  opacity: ${props => (props.isMenuOpen || props.isFirstItem ? '1' : '0')};

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
    border-radius: 5px;
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
