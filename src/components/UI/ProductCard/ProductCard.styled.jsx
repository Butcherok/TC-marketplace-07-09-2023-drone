import styled from 'styled-components';

export const Card = styled.div`
  padding: 0 16px 24px;
  background-color: #fafcff;
  width: 196px;
  height: 248px;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.1);

  & .heart-wrapper {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    transform: translateX(16px);

    & svg {
      width: 40px;
      height: 40px;
      stroke: ${props =>
        props.favorite ? props.theme.colors.red : props.theme.colors.logo};
      fill: ${props =>
        props.favorite ? props.theme.colors.red : 'transparent'};
    }
  }

  & .card-content {
    display: flex;
    flex-direction: column;
    flex-grow: 1;

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
