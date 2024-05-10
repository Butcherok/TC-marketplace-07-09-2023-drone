import styled from 'styled-components';

export const OrderItemContainer = styled.li`
  padding: 24px 8px;
  border-radius: 8px;
  background: #fafcff;

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

export const ProductList = styled.ul`
  margin-bottom: 32px;
`;

export const OrderContainer = styled.div`
  padding: 16px 0;
`;

export const OrderNumTitle = styled.h3`
  margin-bottom: 24px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;

export const TopContainer = styled.div`
  margin-bottom: 24px;
  display: flex;
`;

export const OrderImg = styled.img`
  margin-right: 8px;
  width: 100px;
  height: 100px;

  border-radius: 4px;
`;

export const OrderTitle = styled.p`
  font-size: 16px;
  line-height: ${props => props.theme.lineHeights.title}

  color: ${props => props.theme.colors.logospan};
`;

export const CrossBtn = styled.button`
  width: 24px;
  height: 24px;
`;

export const IconCross = styled.svg`
  width: 24px;
  height: 24px;

  stroke: ${props => props.theme.colors.logospan};
`;

export const BottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const Icon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;

  padding: 10px;
  border-radius: 4px;
  border: 1px solid #dbdce6;
  background: #fafcff;

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
`;

export const OldPrice = styled.p`
  font-size: ${props => props.theme.fontSizes.s};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
  text-decoration-line: line-through;
`;

export const CurrentPrice = styled.p`
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};
`;

export const CheckoutPriceContainer = styled.div`
  margin-bottom: 16px;

  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};
`;

export const CheckoutTitle = styled.h3`
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};
`;

export const BuyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  margin-bottom: 12px;
  padding: 10px 10px 10px 20px;

  width: 100%;
  height: 40px;

  border-radius: 4px;
  background: ${props => props.theme.colors.btnColor};

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.background};
`;

export const IconCart = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.background};
`;

export const ContinueBuyBtn = styled.button`
  width: 100%;
  height: 40px;

  padding: 10px 10px 10px 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.greyLight};

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};
`;
