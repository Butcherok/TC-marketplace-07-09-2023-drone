import styled from 'styled-components';

export const Card = styled.div`
  display: none;

  @media ${props => props.theme.media.tablet} {
    // width: 100%;
    // height: 340px;
    display: flex;
    background-color: #fafcff;
    border-radius: 8px;
    box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
    padding: 16px;
  }

  @media ${props => props.theme.media.desktop} {
    // height: 289px;
  }
`;

export const CardPhotos = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 8px 20px;
  margin-right: 40px;
  position: relative;

  @media ${props => props.theme.media.desktop} {
    width: 20%;
  }

  .main-photo {
    width: 164px;
    height: 164px;

    @media (max-width: 1279.98px) {
      width: 200px;
      height: 200px;
    }
  }
`;

export const CardPrice = styled.div`
  &.price-values {
    display: none;

    @media ${props => props.theme.media.desktop} {
      display: flex;        
      align-items: center;
    }
  }

  .sale-price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 45px;


    & .old-price {
      text-decoration: line-through;
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeights.normal};
      line-height; ${props => props.theme.lineHeights.title};
      color: ${props => props.theme.colors.secondary};
    }

    & .discounted-price {
      font-size: 20px;
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.red};
    }   
    
    & .current-price {
      font-size: 20px;
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.logospan};
    }
  }

  &.price-photos {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;

    @media ${props => props.theme.media.desktop} {
      display: none;
    }
  }
`;

export const CardText = styled.div`
  display: flex;
  flex-direction: column;
  width: 65%;

  h3 {
    font-size: 20px;
    line-height: ${props => props.theme.lineHeights.section};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.logospan};
  }

  .title-container {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 4px;
  }

  .heart {
    width: 24px;
    height: 24px;
    stroke: ${props =>
      props.favorite ? props.theme.colors.red : props.theme.colors.logo};
    fill: ${props => (props.favorite ? props.theme.colors.red : 'transparent')};

    transition: fill 0.2s ease-out, stroke 0.2s ease-out;

    &:hover {
      fill: #ff3333;
      stroke: #ff3333;
    }
  }

  @media (max-width: 1279.98px) {
    .in-stock {
      margin-bottom: 4px;
    }
    .rating {
      margin-bottom: 16px;
    }
  }

  @media (min-width: 1280px) {
    .rating-block {
      display: flex;
      align-items: center;
      margin-bottom: 24px;
      gap: 80px;
    }

    .title-container {
      margin-bottom: 12px;
    }
  }

  .in-stock {
    font-size: 14px;
    color: ${props => props.theme.colors.green};

    svg {
      width: 18px;
      height: 18px;
      stroke: ${props => props.theme.colors.green};
    }
  }

  .rating {
    display: flex;
    align-items: center;

    .stars {
      margin-right: 12px;
      svg {
        width: 24px;
        height: 24px;
        fill: ${props => props.theme.colors.yellow};
      }
    }
    span {
      font-size: ${props => props.theme.fontSizes.s};
      font-weight: ${props => props.theme.fontWeights.normal};
      line-height: ${props => props.theme.lineHeights.title};
      color: #7b7b89;
      text-decoration: underline;
    }
  }

  .characteristics {
    display: flex;
    flex-direction: column;
    gap: 60px;
    row-gap: 9px;
    margin-bottom: 24px;

    @media ${props => props.theme.media.desktop} {
      flex-direction: row;
      flex: 1;
    }

    .left-block,
    .right-block {
      display: flex;
      flex-direction: column;
      row-gap: 9px;

      @media ${props => props.theme.media.desktop} {
        width: 50%;
      }
    }

    .row-characteristic {
      display: flex;
      justify-content: space-between;
      gap: 14px;
      width: 100%;
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.normal};

      .characteristic-key {
        width: 65%;
        color: ${props => props.theme.colors.greyDark};
      }

      .characteristic-value {
        width: 45%;
        color: ${props => props.theme.colors.logospan};
      }
    }
  }
`;

export const CartBtn = styled.button`
  width: 164px;
  height: 40px;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};

  border-radius: 4px;
  color: ${props => props.theme.colors.background};
  background-color: ${props => props.theme.colors.btnColor};
  border-color: ${props => props.theme.colors.btnColor};

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  @media (max-width: 1279.98px) {
    margin-top: 8px;
  }

  @media (min-width: 1280px) {
    margin-left: 40px;
  }

  & svg {
    width: 24px;
    height: 24px;
    stroke: ${props => props.theme.colors.background};
    margin-left: 10px;
  }

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.btnColorHover};
    border-color: ${props => props.theme.colors.btnColorHover};
  }

  &:active {
    background-color: ${props => props.theme.colors.btnColorActive};
    border-color: ${props => props.theme.colors.btnColorActive};
  }
`;
