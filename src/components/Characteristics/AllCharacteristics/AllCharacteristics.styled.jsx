import styled from 'styled-components';

export const AllCharacteristicsBackground = styled.div`
  width: 100vw;
  padding: 24px;
  margin-bottom: 40px;
  background: ${props => props.theme.colors.white};
  border-radius: ${props => props.theme.fontSizes.xxs};

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
