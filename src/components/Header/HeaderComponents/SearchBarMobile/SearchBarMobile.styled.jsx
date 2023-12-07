import styled from "styled-components";

export const SearchBarContainer = styled.div`
position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  display: flex;
  z-index: 100;
  background-color: #fafcff;
  height: 48px;
  align-items: center;
  padding: 0 20px;
  // justify-content: space-between;

  @media ${props => props.theme.media.desktop} {
    display: none;
  }
`;

export const Form = styled.form`
  display: flex;
  width: 100%;
  padding: 0 2px;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;

export const BtnsWrap = styled.div`
  display: flex;

  & svg {
    width: 32px;
    height: 32px;
    stroke: ${props => props.theme.colors.logo};
  }
`;
