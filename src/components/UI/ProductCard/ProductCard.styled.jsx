import styled from 'styled-components';
import { Button } from 'react-bootstrap';

export const Card = styled.div`
  // padding: 0 0 24px;
  background-color: #ffffff;
  position: relative;
  // width: 196px;
  // height: 248px;
  width: ${props => props.width};
  height: ${props => props.height};
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.1);

  & .heart-wrapper {
    // width: 100%;
    // display: flex;
    // justify-content: flex-end;
    margin-right: 8px;
    margin-left: auto;
    margin-top: 8px;
    margin-bottom: 20px;
    background-color: ${props => props.theme.colors.white};

    & svg {
      width: 24px;
      height: 24px;
      stroke: ${props =>
        props.favorite ? props.theme.colors.red : props.theme.colors.logo};
      fill: ${props =>
        props.favorite ? props.theme.colors.red : 'transparent'};

      // @media ${props => props.theme.desktop} {
      //   position: relative;
      //   left: 16px;
      // }
    }
  }


  & .card-content {
    padding: 0 16px 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${props => props.theme.colors.white};

    & .sale-price {
      display: flex;
      flex-direction: column;


      & .old-price {
        text-decoration: line-through;
        font-size: ${props => props.theme.fontSizes.s};
        font-weight: ${props => props.theme.fontWeights.normal};
        line-height; ${props => props.theme.lineHeights.title};
        color: ${props => props.theme.colors.secondary};
      }

      & .discounted-price {
        font-size: ${props => props.theme.fontSizes.m};
        line-height: ${props => props.theme.lineHeights.title};
        font-weight: ${props => props.theme.fontWeights.bold};
        color: ${props => props.theme.colors.red};
      }
      
    }

    & img {
      align-self: center;
      margin-bottom: 36px;
    }

    & h3 {
      font-size: ${props => props.theme.fontSizes.s};
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.normal};
      align-self: start;
      flex-grow: 1;
      color: ${props => props.theme.colors.logospan};
    }

    & p {
      align-self: start;
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.price};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.logo};
    }
  }
`;

export const CartBtn = styled(Button)`
  width: 40px;
  height: 40px;
  position: absolute;
  padding: 8px;
  bottom: 16px;
  right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.colors.btnColor};
  border-color: ${props => props.theme.colors.btnColor};

  & svg {
    width: 30px;
    height: 30px;
    stroke: ${props => props.theme.colors.background};
  }
`;
