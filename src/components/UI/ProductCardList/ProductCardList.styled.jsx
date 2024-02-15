import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Card = styled.div`
  display: none;

  @media ${props => props.theme.media.tablet} {
    width: 100%;
    height: 340px;
    display: flex;
    background-color: #fafcff;
    border-radius: 8px;
    box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);
    padding: 16px;
  }

  @media ${props => props.theme.media.desktop} {
    height: 289px;
  }
`;

export const CardPhotos = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px 8px 20px;
  margin-right: 40px;
  position: relative;

  @media ${props => props.theme.media.desktop} {
    width: 20%;
  }

  // & .heart-wrapper {
  //   width: 100%;
  //   display: flex;
  //   justify-content: flex-end;

  .heart {
    width: 24px;
    height: 24px;
    position: absolute;
    right: -6px;
    top: -10px;
    stroke: ${props =>
      props.favorite ? props.theme.colors.red : props.theme.colors.logo};
    fill: ${props => (props.favorite ? props.theme.colors.red : 'transparent')};
  }

  .photos {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding-top: 20px;

    @media ${props => props.theme.media.desktop} {
      justify-content: space-around;
    }

    .main-photo {
      display: flex;
      align-items: flex-start;
      margin-bottom: 20px;
    }

    .small-photos {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      width: 100%;

      img {
        width: 46%;
      }
    }
  }
`;

export const CardPrice = styled.div`
  &.price-values {
    display: none;

    @media ${props => props.theme.media.desktop} {
      display: flex;        
      align-items: center;

      button {
        width: 164px;
        height: 40px;
        margin-left: 40px;
      }
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
      color: ${props => props.theme.colors.grey};
    }

    & .discounted-price {
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.red};
    }   
    
    & .current-price {
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.logospan};
    }
  }

  

  &.price-photos {
    display: flex;
    flex-direction: column;
    align-items: center;

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

  .in-stock {
    color: ${props => props.theme.colors.green};

    svg {
      width: 11px;
      height: 13px;
      stroke: ${props => props.theme.colors.green};
    }
  }

  .rating {
    display: flex;
    align-items: center;
    margin-bottom: 16px;

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
    row-gap: 9px;

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
      width: 100%;
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.normal};

      .characteristic-key {
        width: 55%;
        color: ${props => props.theme.colors.greyDark};
      }

      .characteristic-value {
        width: 45%;
        color: ${props => props.theme.colors.logospan};
      }
    }
  }
`;

export const CartBtn = styled(Button)`
  width: 100%;
  position: relative;
  dispaly: flex;
  align-items: center;
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  margin-top: 8px;

  & svg {
    width: 24px;
    height: 24px;
    stroke: ${props => props.theme.colors.background};
    margin-left: 10px;
  }
`;
