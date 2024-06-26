import Modal from 'react-modal';
import { styled } from 'styled-components';

export const StyledModal = styled(Modal)`
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;

  margin-right: -50%;
  padding: 40px 12px;
  border-radius: 8px;

  background: #fafcff;
  transform: translate(-50%, -50%);
  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  @media screen and (max-width: 727.98px) {
    width: 100%;
    height: 100%;

    overflow-y: scroll;
  }

  @media screen and (min-width: 728px) {
    width: 728px;
  }
`;

export const RetunBtn = styled.button`
  display: block;
  margin-right: 0;
  margin-bottom: 32px;
  margin-left: auto;

  cursor: pointer;
`;

export const ReturnIcon = styled.svg`
  width: 24px;
  height: 24px;

  stroke: ${props => props.theme.colors.logospan};
`;

export const Title = styled.h3`
  margin-bottom: 32px;
  color: #000000;

  font-family: ${props => props.theme.fonts.main};
  font-size: 20px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.section};
  text-align: center;
`;

export const Text = styled.p`
  margin-bottom: 32px;

  color: var(--Text-Black, #1d1f36);
  font-family: Inter;
  font-size: 18px;
  font-weight: 400;
  line-height: 130%;
`;

export const StyledForm = styled.form`
  margin-bottom: 32px;
`;

export const BtnSubmit = styled.button`
  width: 100%;
  display: block;
  padding: 10px 10px 10px 20px;
  border-radius: 4px;
  border: none;

  background: ${props => props.theme.colors.btnColor};
  color: ${props => props.theme.colors.background};

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  text-align: center;

  transition: background-color 0.2s ease-out, border-color 0.2s ease-out;

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

export const ErrorMessage = styled.p`
  margin-top: 8px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.red};
`;
