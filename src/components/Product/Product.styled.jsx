import styled from 'styled-components';

export const ProductBackground = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: ${props => props.theme.fontSizes.xxs};
  background: ${props => props.theme.colors.background};

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (min-width: 1440px) {
    padding: 24px;
  }
`;

export const ProductContainer = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    gap: 80px;
  }
`;

export const ProductTitle = styled.h2`
  margin-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};

  @media screen and (min-width: 1440px) {
    font-size: ${props => props.theme.fontSizes.xl};
  }

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const ProductTitle2 = styled.h2`
  margin-bottom: 8px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xl};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};

  @media screen and (max-width: 1439.98px) {
    display: none;
  }
`;

export const ProductMainImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;

  // width: 100%;
  // width: 280px;
  // height: 188px;

  // @media screen and (min-width: 768px) {
  //   width: 440px;
  //   height: 296px;
  // }
  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 350px;
  }
`;

export const ProductImgList = styled.div`
  // display: flex;
  // justify-content: center;
  margin: 0 auto;

  @media screen and (max-width: 1439.98px) {
    margin-bottom: 36px;
  }
`;

export const ImageContainer = styled.div`
  // display: flex;
  // justify-content: center;

  @media screen and (min-width: 1440px) {
    width: 520px;
  }
`;

export const ProductImgItem = styled.div`
  margin-right: 4px;
  margin-left: 4px;
`;

export const ProductImg = styled.img`
  width: 80px;
`;

export const BottomContainer = styled.div`
  @media screen and (max-width: 1439.98px) {
    padding-left: 12px;
    padding-right: 12px;
  }
`;

export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1439.98px) {
    display: flex;
    gap: 24px;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 36px;
  }
`;

export const FlexContainer2 = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 100px;
  }
`;
export const TextContainer = styled.div`
  // display: flex;
`;
