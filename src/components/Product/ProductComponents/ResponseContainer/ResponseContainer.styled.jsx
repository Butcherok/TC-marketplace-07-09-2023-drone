import styled from 'styled-components';

export const AvailableContainer = styled.div`
  display: flex;
  margin-right: 16px;
`;

export const IconCheck = styled.svg`
  stroke: ${props => props.theme.colors.green};
  width: 18px;
  height: 18px;
`;

export const AvailableText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.green};
`;

export const FlexWraper = styled.div`
  display: flex;
  flex-wrap: wrap;

  margin-bottom: 36px;

  @media (max-width: 479.98px) {
    flex-direction: column;
  }

  @media ${props => props.theme.media.bigMobile} {
    align-items: center;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 479.98px) {
    margin-bottom: 16px;
  }

  @media ${props => props.theme.media.bigMobile} {
    margin-right: 16px;
  }
`;

export const IconStar = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.yellow};
  cursor: pointer;

  &:hover {
    fill: ${props => props.theme.colors.yellow};
  }
`;

export const StarsContainer = styled.ul`
  display: flex;
`;

export const Responses = styled.a`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  text-decoration-line: underline;

  color: ${props => props.theme.colors.greyDark};
`;
