import styled from 'styled-components';

export const ProductBackground = styled.section`
  margin-bottom: 40px;
  padding-top: 24px;
  padding-bottom: 24px;
  border-radius: ${props => props.theme.fontSizes.xxs};
  background: ${props => props.theme.colors.background};

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
`;

export const ProductTitle = styled.h2`
  margin-bottom: 8px;
  padding-right: 12px;
  padding-left: 12px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: 120%; /* 28.8px */
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};
`;

export const ProductImg = styled.img`
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 8px;

  width: 280px;
  height: 188px;

  @media screen and (min-width: 768px) {
    width: 440px;
    height: 296px;
  }
  @media screen and (min-width: 1440px) {
    width: 520px;
    height: 350px;
  }
`;

export const ProductImgList = styled.ul`
  display: flex;
  margin-bottom: 36px;
`;

export const ProductImgItem = styled.li``;

export const BottomContainer = styled.div`
  padding-left: 12px;
  padding-right: 12px;
`;
