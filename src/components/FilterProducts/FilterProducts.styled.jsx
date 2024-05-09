import styled from 'styled-components';

export const StyledFilterProducts = styled.div`
  width: 100%;
  padding-top: 20px;
`;

export const FilterProductsContainer = styled.div`
  padding: 0 4px;
  width: 100%;
  display: flex;
`;

export const ProductsContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  @media ${props => props.theme.media.tablet} {
    margin-left: 20px;
  }
`;

export const HeadFilterProducts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  & .product-filter {
    @media ${props => props.theme.media.tablet} {
      display: none;
    }
  }

  & svg {
    fill: ${props => props.theme.colors.logospan};
    width: 24px;
    height: 24px;
    margin-right: 4px;
  }

  & span {
    font-size: ${props => props.theme.fontSizes.s};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.title};
    color: ${props => props.theme.colors.logospan};
  }

  & .dropdown-btn button {
    background-color: transparent;
    border-color: transparent;
    color: ${props => props.theme.colors.logospan};
  }
`;

export const FilterProductsContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 12px;

  @media ${props => props.theme.media.bigMobile} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .product-card-link {
    @media ${props => props.theme.media.bigMobile} {
      width: calc(50% - 10px);
    }

    @media ${props => props.theme.media.tablet} {
      width: calc(33% - 12px);
    }

    @media ${props => props.theme.media.landscapeTablet} {
      width: calc(25% - 16px);
    }

    @media ${props => props.theme.media.desktop} {
      width: calc(20% - 12px);
    }
  }

  .product-card {
    & img {
      width: 134px;
    }

    @media screen and (min-width: 480px) {
      width: 100%;
      height: 360px;
    }

    @media screen and (min-width: 1440px) {
      & img {
        width: 164px;
      }
    }

    span {
      font-size: 14px;
    }

    span.discounted-price {
      font-size: 14px;
    }
  }
`;
