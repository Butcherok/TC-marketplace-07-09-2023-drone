import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: max-content;
`;

export const LogoMainText = styled.p`
  font-family: ${props => props.theme.fonts.logo};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};
  letter-spacing: 0.36px;

  color: ${props => props.theme.colors.logo};
  & > span {
    color: ${props => props.theme.colors.logospan};
  }

  @media ${props => props.theme.media.desktop} {
    font-size: ${props => props.theme.fontSizes.l};
    line-height: ${props => props.theme.lineHeights.normal};
  }
`;

export const LogoNoteText = styled.p`
  font-size: 7px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.normal};
  color: ${props => props.theme.colors.logonote};

  @media ${props => props.theme.media.desktop} {
    font-size: ${props => props.theme.fontSizes.logonote};
    line-height: ${props => props.theme.lineHeights.button};
  }
`;

export const LogoIcon = styled.img`
  display: inline-block;
  width: 32px;
  height: 32px;

  @media ${props => props.theme.media.desktop} {
    width: 40px;
    height: 40px;
`;
