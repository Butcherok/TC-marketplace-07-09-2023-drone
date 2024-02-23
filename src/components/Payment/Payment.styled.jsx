import styled from 'styled-components';

export const PaymentBackground = styled.section`
  width: 100%;
  margin-bottom: 40px;
  padding: 24px 12px;
  border-radius: ${props => props.theme.fontSizes.xxs};
  background: #fafcff;
  //   background: ${props => props.theme.colors.background};

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
`;

export const PaymentTitle = styled.h2`
  margin-bottom: 16px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};
`;

export const PaymentList = styled.ul`
  margin-bottom: 16px;

  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const PaymentItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
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
`;
