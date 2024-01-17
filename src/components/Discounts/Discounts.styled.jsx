import styled from 'styled-components';

export const StyledDiscounts = styled.section`
  width: 100%;
  padding: 40px 0 0;
`;

export const DiscountsContainer = styled.div`
  margin: 0 auto;

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
  }

  & .cards-group-head {
    display: flex;
    justify-content: space-between;
    padding: 20px 8px;

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
    width: 100%;
    justify-content: center;

    // & card1 {
    //   width: 50% !important;
    // }
  }

  & .heart-wrapper {
    transform: translateX(0);

    @media ${props => props.theme.media.desktop} {
      transform: translateX(16px);
    }
  }

  & .card-content,
  & .heart-wrapper {
    @media ${props => props.theme.media.bigMobile} {
      background-color: #f5f6fa;
    }

    @media (min-width: 1024px) {
      background-color: ${props => props.theme.colors.white};
    }
  }
`;

export const DiscountsTitle = styled.h2`
  font-size: 20px;
  line-height: ${props => props.theme.lineHeights.section};
  font-weight: ${props => props.theme.fontWeights.bold};
  margin-bottom: 8px;
`;
