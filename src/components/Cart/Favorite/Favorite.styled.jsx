import styled from 'styled-components';

export const FavoriteSection = styled.section`
  width: 100%;
`;

export const ConsideredContainer = styled.div`
  margin: 0 auto;

  @media screen and (max-width: 1279.98px) {
    margin-bottom: 16px;
  }

  & .slick-track {
    display: flex;
    gap: 8px;

    @media ${props => props.theme.desktop} {
      gap: 20px;
    }
  }

  & .slider {
    width: calc(100% + 16px);
  }

  & .product-card {
    & img {
      width: 134px;
    }

    @media screen and (min-width: 480px) {
      //   width: 100%;
      height: 323px;
    }

    // @media screen and (min-width: 1440px) {
    //   & img {
    //     width: 164px;
    //   }
    // }

    span {
      font-size: 14px;
    }

    span.discounted-price {
      font-size: 14px;
    }
  }
`;

export const Title = styled.h2`
  font-size: 20px;
  line-height: ${props => props.theme.lineHeights.section};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 24px;
`;
