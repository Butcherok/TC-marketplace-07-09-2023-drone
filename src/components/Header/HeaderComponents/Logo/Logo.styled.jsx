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
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.normal};
  letter-spacing: 0.36px;

  color: ${props => props.theme.colors.logo};
  &>span {
    color: ${props => props.theme.colors.logospan};

  }
`;

export const LogoNoteText = styled.p`
  font-size: ${props => props.theme.fontSizes.logonote};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};

  color: ${props => props.theme.colors.logonote};
`;

export const LogoIcon = styled.img`
  display: inline-block;
  width: 40px;
  height: 40px;
`;
