import styled, { keyframes } from 'styled-components';

const moveUp = keyframes`
0% {transform: translateY(100%);}
100% {transform: translateY(0%);}
`;

// const moveDown = keyframes`
// 0% {transform: translateY(0%);}
// 100% {transform: translateY(100%);}
// `;

export const AllCharacteristicsBackground = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  padding: 24px;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.fontSizes.xxs};

  overflow-y: scroll;
  z-index: 1000;

  animation-name: ${props => props.open && moveUp};
  animation-duration: 0.4s;

  @media screen and (min-width: 1440px) {
    padding: 50px 24px;
  }
`;

export const IconCross = styled.svg`
  display: block;
  margin-right: 0;
  margin-left: auto;
  margin-bottom: 16px;
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;
  stroke: #0f172a;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const AllCharacteristicsList = styled.ul`
  @media screen and (max-width: 1439.98px) {
    margin-bottom: 40px;
  }

  //   @media screen and (min-width: 992px) {
  //     width: 456px;
  //   }

  //   @media screen and (min-width: 1440px) {
  //     width: 560px;
  //   }
`;

export const AllCharacteristicsItem = styled.li`
  //   display: flex;
  //   justify-content: space-between;

  //   &:not(:last-child) {
  //     margin-bottom: 10px;
  //   }

  @media screen and (max-width: 1439.98px) {
    &:not(:last-child) {
      margin-bottom: 24px;
    }
  }
`;

export const AllCharacteristicsTitle = styled.p`
  margin-bottom: 8px;

  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;

export const AllCharacteristicsValue = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;

export const Description = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  //   @media screen and (max-width: 1439.98px) {
  margin-bottom: 32px;
  //   }

  //   @media screen and (min-width: 992px) {
  //     width: 456px;
  //   }

  //   @media screen and (min-width: 1440px) {
  //     width: 560px;
  //   }
`;

// export const FlexWrapper = styled.div`
//   @media screen and (min-width: 992px) {
//     display: flex;
//     justify-content: space-between;
//   }

//   @media screen and (min-width: 992px) and (max-width: 1439.98px) {
//     margin-bottom: 24px;
//   }
// `;
