import styled from 'styled-components';

export const StyledDiscounts = styled.section`
  width: 100%;
  padding: 40px 0 0;
`;

export const DiscountsContainer = styled.div`
  margin: 0 auto;

  & .slick-track {
    display: flex;
    gap: 16px;

    @media ${props => props.theme.media.desktop} {
      gap: 20px;
    }
  }

  & .slider {
    width: calc(100% + 16px);
  }

  & .slick-slide {
    width: 100%;
    height: auto;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.white};

    @media (min-width: 325px) {
      width: 292px;
    }

    @media ${props => props.theme.media.desktop} {
      width: 412px;
    }
  }

  & .cards-group {
    display: flex !important;
    flex-direction: column;
    width: 100%;
    padding: 20px 16px;
  }

  & .cards-group-head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    // padding: 20px 8px;

    // @media ${props => props.theme.media.desktop} {
    //   padding-left: 20px;
    //   padding-right: 20px;
    // }
    & a {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeights.normal};
      line-height: ${props => props.theme.lineHeights.title};
    }
  }

  & .cards-head-title {
    font-size: ${props => props.theme.fontSizes.m};
    font-weight: ${props => props.theme.fontWeights.normal};
    line-height: ${props => props.theme.lineHeights.title};
    color: ${props => props.theme.colors.logospan};
  }

  & .card-group-content {
    display: flex;
    gap: 12px;
    width: 100%;
    justify-content: start;

    & .card-item {
      @media ${props => props.theme.media.bigMobile} {
        background-color: #f5f6fa;
      }
      // padding: 0 8px 20px;
      // background-color: #f5f6fa;

      // @media ${props => props.theme.media.desktop} {
      //   padding: 0 0 16px;
      // }
    }

    & .card-item .card-content {
      border-radius: 0 0 8px 8px;
      // padding: 0 16px 24px;
    }

    & .card-item .heart-wrapper {
      border-radius: 8px 8px 0 0;

      & svg {
        left: 0;
      }
    }

    & .card-item .card-content,
    & .card-item .heart-wrapper {
      @media ${props => props.theme.media.bigMobile} {
        background-color: #f5f6fa;
        border-radius: 8px;
      }
    }

    // @media (min-width: 1024px) {
    //   background-color: #f5f6fa;
    // }
  }
`;

export const DiscountsTitle = styled.h2`
  font-size: 20px;
  line-height: ${props => props.theme.lineHeights.section};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 8px;
`;
