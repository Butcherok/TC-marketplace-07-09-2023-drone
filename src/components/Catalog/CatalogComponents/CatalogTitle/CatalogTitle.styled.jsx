import styled from 'styled-components';

export const TitleWrapper = styled.div`
  display: flex;
  position: relative;
  margin-bottom: 8px;

  @media ${props => props.theme.media.bigMobile} {
    display: none;
  }

  h2 {
    font-size: 20px;
    font-weight: ${props => props.theme.fontWeights.bold};
    line-height: ${props => props.theme.lineHeights.section};
    color: ${props => props.theme.colors.logospan};
  }

  & svg {
    stroke: ${props => props.theme.colors.logo};
    width: 24px;
    height: 24px;
    position: absolute;
    right: -8px;
    top: 3px;
    cursor: pointer;
    transition: transform 0.3s ease;
    transform: ${props => (props.$isMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  }
`;
