import styled from 'styled-components';

export const FlexWrapper = styled.div`
  @media ${props => props.theme.media.bigMobile} {
    display: flex;
    gap: 16px;
  }
  @media screen and (max-width: 1439.98px) {
    margin-bottom: 36px;
  }
`;

export const SellerImg = styled.img`
  width: 58px;
  height: 54px;

  @media screen and (max-width: 480px) {
    margin-bottom: 16px;
  }
`;

export const SellerTitle = styled.h3`
  margin-bottom: 8px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logo};
`;

export const SellerResponse = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  text-decoration-line: underline;

  color: ${props => props.theme.colors.greyDark};
`;
