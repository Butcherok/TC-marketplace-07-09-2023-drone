import { NavLink } from 'react-router-dom';
import Modal from 'react-modal';
// import { Button } from 'react-bootstrap';
import { styled, createGlobalStyle } from 'styled-components';

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
  overflow-y: scroll;
  box-shadow: 3px 4px 40px 0px rgba(187, 194, 221, 0.3);

  // &.ReactModal__Body--open {
  //   overflow: hidden;
  // }

  @media screen and (max-width: 727.98px) {
    width: 100%;
    height: 100%;
  }

  @media screen and (min-width: 728px) {
    width: 728px;
  }
`;

createGlobalStyle`
  .ReactModal__Body--open {
    overflow: hidden;
  }
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

export const StyledRegisterForm = styled.form``;

export const InputList = styled.ul`
  margin-bottom: 32px;

  @media screen and (min-width: 728px) {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin-bottom: 8px;

  color: ${props => props.theme.colors.greyDark};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};
`;

export const StyledBtnList = styled.ul`
  margin-bottom: 32px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 728px) {
    flex-direction: row;
  }
`;
export const StyledBtnItem = styled.li``;

export const StyledBtn = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  padding: 12px;
  border: 1px solid ${props => props.theme.colors.btnColor};
  border-radius: 4px;

  background: ${props => props.theme.colors.background};

  color: ${props => props.theme.colors.btnColor};

  font-family: ${props => props.theme.fonts.main};
  font-size: 12px;
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
  text-align: center;
`;

export const StyledBtnIcon = styled.svg`
  width: 18px;
  height: 18px;
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
`;

export const Message = styled.p``;

export const LoginLink = styled(NavLink)``;
