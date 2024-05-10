import styled from 'styled-components';

export const CartTitleContainer = styled.div`
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-family: ${props => props.theme.fonts.main};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};

  color: ${props => props.theme.colors.logospan};
`;

export const ReturnIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${props => props.theme.colors.logospan};
`;
