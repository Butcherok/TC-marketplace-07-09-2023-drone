import styled from 'styled-components';

export const ContainerNoticesSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media ${props => props.theme.media.desktop} {
    margin-right: 14px;
  }
`;

export const Form = styled.form`
  @media ${props => props.theme.media.desktop} {
    position: relative;
    min-width: 536px;
    height: 36px;
  }
`;

export const Input = styled.input`
  display: none;
  @media ${props => props.theme.media.desktop} {
    display: block;
    width: 100%;
    height: 100%;

    padding: 14px 12px 13px 12px;

    // @media (min-width: 768px) {
    //   padding: 10px 20px;
    // }

    border-radius: 8px;
    border: ${props => props.theme.borders.normal}
      ${props => props.theme.colors.secondary};
    outline: transparent;
    background: transparent;
    // box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    box-shadow: 3px 1px 40px 0px rgba(187, 194, 221, 0.1);
    color: ${props => props.theme.colors.logospan};
    font-family: Inter;
    font-size: ${props => props.theme.fontSizes.xs};
    font-weight: 400;
    letter-spacing: 0.56px;

    ::placeholder {
      color: #888;
      font-family: Inter;
      font-size: ${props => props.theme.fontSizes.xs};
      font-weight: 400;
      letter-spacing: 0.8px;
    }

    &:hover {
      border-color: #3385FF;
    }

    &:focus {
      border-color: #1656B6;
    }
  }
`;

export const BtnsWrap = styled.div`
  @media ${props => props.theme.media.desktop} {
    position: absolute;
    top: 2px;
    right: 9px;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
`;

export const SearchBtn = styled.button`
  width: 32px;
  height: 32px;
  stroke: #1d1f36;
  border: none;
  background-color: transparent;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transform: scale(1.3);

    @media ${props => props.theme.media.desktop} {
      transform: scale(1);
    }
  }

  &:hover svg {
    stroke: #3385ff;
    transform: scale(1.05);
  }

  &:focus svg {
    stroke: #1656b6;
  }
`;

export const SubmitBtn = styled.button`
  width: 24px;
  height: 24px;
  stroke: #1d1f36;
  border: none;
  background-color: #fff;
  padding: 0;

  &:hover svg {
    stroke: #3385ff;
    transform: scale(1.05);
  }

  &:focus svg {
    stroke: #1656b6;
  }
`;

// export const ResetBtn = styled.button`
//   width: 24px;
//   height: 24px;

//   border: none;
//   background-color: #fff;
//   padding: 0;

//   &:hover svg use,
//   &:focus svg use {
//     stroke: red;
//     transform: scale(1.05);
//   }
// `;
