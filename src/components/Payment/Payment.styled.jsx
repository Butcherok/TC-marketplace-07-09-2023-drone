import styled from 'styled-components';

export const PaymentBackground = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding: 24px 12px;
  border-radius: ${props => props.theme.fontSizes.xxs};
  background: #fafcff;
  //   background: ${props => props.theme.colors.background};

  // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (min-width: 1440px) {
    // width: 100%;
    padding: 50px 24px;
    // margin-bottom: 40px;
    // background: #fafcff;
    border-radius: 0px 0px 8px 8px;
    // box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
  }
`;

export const PaymentTitle = styled.h2`
  margin-bottom: 16px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};

  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

export const PaymentList = styled.ul`
  margin-bottom: 16px;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;

  @media screen and (min-width: 1440px) {
    margin-bottom: 24px;

    gap: 24px;
  }
`;

export const PaymentItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px;

  border-radius: 4px;
  border: 1px solid #f2f2f2;
  background: #fafcff;
  box-shadow: 3px 4px 40px 0px rgba(207, 217, 232, 0.3);
`;

export const PaymentType = styled.h3`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  @media screen and (max-width: 1439.98px) {
    display: none;
  }
`;

export const CommissionText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
`;

export const PaymentText = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: 16px;
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};

  //   &:not(:last-child){

  //   }

  @media screen and (min-width: 1440px) {
    color: ${props => props.theme.colors.logospan};

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;
