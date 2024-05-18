import styled from 'styled-components';

export const FlexWrapper = styled.div`
  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    gap: 64px;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 480px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 40px;
  }

  @media screen and (min-width: 1440px) {
    gap: 64px;
  }
`;

export const Prices = styled.div`
  @media screen and (max-width: 1439.98px) {
    margin-bottom: 30px;
  }
`;

export const InititalPrice = styled.p`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};
  text-decoration: line-through;

  color: ${props => props.theme.colors.greyDark};
`;

export const CurrentPrice = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.l};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logo};
`;

export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media screen and (max-width: 1439.98px) {
    margin-bottom: 24px;
  }
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

export const ButtonBuy = styled.button`
  display: flex;
  width: 100%;
  height: 40px;
  padding: 10px 10px 10px 20px;
  justify-content: center;
  align-items: center;
  gap: 10px;

  border: none;
  border-radius: 4px;
  background: var(--Primary-active, #314eb6);

  font-family: ${props => props.theme.fonts.main};
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

  @media screen and (min-width: 1440px) {
    width: 164px;
  }
`;
export const CartIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.background};
`;
