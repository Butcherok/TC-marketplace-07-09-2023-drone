import styled from 'styled-components';

export const StyledFilterProducts = styled.div``;

export const FilterProductsContainer = styled.div`
  padding: 0 4px;
  width: 100%;
`;

export const HeadFilterProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;

  & svg {
    fill: ${props => props.theme.colors.logospan};
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }

  & span {
    font-size:  ${props => props.theme.fontSizes.s};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height:  ${props => props.theme.lineHeights.title};
    color: ${props => props.theme.colors.logospan};
  }

  & .dropdown-btn button{
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.theme.colors.logospan};
  }
`;
