import styled from 'styled-components';
// import { Button } from 'react-bootstrap';

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
    position: absolute;
    right: 8px;
    top: 8px;

    & svg {
      width: 24px;
      height: 24px;
      stroke: ${props =>
        props.favorite ? props.theme.colors.red : props.theme.colors.logo};
      fill: ${props =>
        props.favorite ? props.theme.colors.red : 'transparent'};

      transition: fill 0.2s ease-out, stroke 0.2s ease-out;

      &:hover{
      fill: #FF3333;
      stroke: #FF3333;
      }
    }
  }


  & .card-content {
    padding: 40px 16px 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    background-color: ${props => props.theme.colors.white};
 
    & .buy-container{
      display: flex;
      justify-content: space-between;
      align-items: center;
      }

     & .card-title{
      margin-bottom: 12px;
     }


      & .sale-price {
      display: flex;
      flex-direction: column;
      }

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


    & img {
      align-self: center;
      margin-bottom: 36px;
    }

    & h3 {
      font-size: ${props => props.theme.fontSizes.s};
      line-height: ${props => props.theme.lineHeights.title};
      font-weight: ${props => props.theme.fontWeights.normal};
      // align-self: start;
      flex-grow: 1;
      color: ${props => props.theme.colors.logospan};
      word-wrap: break-word;
      overflow-wrap: break-word;
    }

    & p {
      // align-self: start;
      font-size: ${props => props.theme.fontSizes.m};
      line-height: ${props => props.theme.lineHeights.price};
      font-weight: ${props => props.theme.fontWeights.bold};
      color: ${props => props.theme.colors.logo};
    }
 
  }
`;

export const CartBtn = styled.button`
  width: 40px;
  height: 40px;
  // position: absolute;
  padding: 8px;
  // bottom: 24px;
  // right: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  background-color: ${props => props.theme.colors.btnColor};
  border-color: ${props => props.theme.colors.btnColor};

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

  & svg {
    width: 30px;
    height: 30px;
    stroke: ${props => props.theme.colors.background};
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
