import styled from 'styled-components';

export const FlexWrapper = styled.div`
  margin-bottom: 36px;

  @media ${props => props.theme.media.bigMobile} {
    display: flex;
  }
`;

export const SellerImg = styled.img`
  width: 58px;
  height: 54px;
  margin-bottom: 16px;
`;

export const SellerTitle = styled.h2`
  margin-bottom: 8px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logo};
`;

export const SellerResponse = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  text-decoration-line: underline;

  color: ${props => props.theme.colors.greyDark};
`;
