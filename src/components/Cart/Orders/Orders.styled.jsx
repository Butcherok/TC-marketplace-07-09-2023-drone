import styled from 'styled-components';

export const OrderSection = styled.section`
  width: 100%;
`;

export const OrderList = styled.ul`
  width: 100%;
`;

export const OrderItemContainer = styled.li`
  padding: 24px 8px;
  border-radius: 8px;
  background: #fafcff;

  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  //   &:not(:last-child) {
  margin-bottom: 24px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 64px;
  }
  //   }

  @media screen and (min-width: 480px) {
    padding: 24px 20px;
  }

  @media screen and (min-width: 1280px) {
    padding: 40px 44px;
  }
`;

export const ProductList = styled.ul`
  margin-bottom: 32px;

  @media screen and (min-width: 480px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 64px;
  }
`;

export const ProductItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 40px;

    @media screen and (min-width: 480px) {
      margin-bottom: 48px;
    }

    @media screen and (min-width: 1280px) {
      margin-bottom: 24px;
    }
  }
`;

export const OrderContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const OrderNumTitle = styled.h3`
  margin-bottom: 24px;
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  @media screen and (min-width: 480px) {
    margin-bottom: 48px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 24px;
  }
`;

export const TopContainer = styled.div`
  margin-bottom: 24px;
  display: flex;

  @media screen and (min-width: 1280px) {
    margin-bottom: 0px;
  }
`;

export const OrderImg = styled.img`
  margin-right: 8px;
  width: 100px;
  height: 100px;

  border-radius: 4px;

  @media screen and (min-width: 480px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 32px;
  }
`;

export const OrderTitle = styled.p`
  font-size: 16px;
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.logospan};

  @media screen and (min-width: 480px) {
    margin-right: 10px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0;
  }
`;

export const CrossBtn = styled.button`
  margin-left: auto;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1280px) {
    align-self: center;
    margin-right: 60px;
    order: -1;
  }
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

  @media screen and (min-width: 728px) {
    justify-content: flex-start;
    gap: 80px;
  }
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
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

  transition: border-color 0.2s ease-out;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.btnColorHover};
  }

  &:active {
    border-color: ${props => props.theme.colors.btnColorActive};
  }
`;

export const NumberInput = styled.p`
  text-align: center;
  width: 22px;
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

  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const CheckoutPriceContainer = styled.div`
  margin-bottom: 16px;

  @media screen and (min-width: 1280px) {
    margin-bottom: 28px;
    margin-right: 40px;

    display: flex;
    align-items: center;
    gap: 67px;
    justify-content: flex-end;
  }
`;

export const CheckoutTitle = styled.h3`
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};

  @media screen and (min-width: 1280px) {
    font-size: ${props => props.theme.fontSizes.l};
  }
`;

export const ButtonContainer = styled.div`
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: row-reverse;
    gap: 24px;
  }
`;

export const BuyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  padding: 10px 10px 10px 20px;

  width: 100%;
  height: 40px;

  border-radius: 4px;
  background: ${props => props.theme.colors.btnColor};

  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.background};

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnColorHover};
    border-color: ${props => props.theme.colors.btnColorHover};
  }

  &:active {
    background-color: ${props => props.theme.colors.btnColorActive};
    border-color: ${props => props.theme.colors.btnColorActive};
  }

  @media screen and (max-width: 1279.98px) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 1280px) {
    width: 254px;
  }
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

  @media screen and (min-width: 1280px) {
    width: 254px;
  }
`;
