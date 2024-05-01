import { NavLink } from 'react-router-dom';
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

export const StyledRegisterForm = styled.form`
  margin-bottom: 32px;
`;

export const InputList = styled.ul`
  margin-bottom: 32px;

  @media screen and (min-width: 728px) {
    display: flex;
    flex-wrap: wrap;
    gap: 16px;
  }
`;

export const InputItem = styled.li`
  @media screen and (max-width: 727.98px) {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 728px) {
    width: 344px;
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

export const InputContainer = styled.div`
  position: relative;
`;

export const InputBtn = styled.button`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
`;

export const StyledInputIcon = styled.svg`
  width: 22px;
  height: 15px;

  fill: #dbdce6;
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
  cursor: pointer;

  @media screen and (min-width: 728px) {
    width: 342px;
  }
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

export const ErrorMessage = styled.p`
  margin-top: 8px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.red};
`;

export const MessageContainer = styled.div`
  text-align: center;
`;

export const Message = styled.p`
  display: inline-block;
  margin-right: 6px;

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: ${props => props.theme.colors.greyDark};
  text-align: center;
`;

export const LoginLink = styled(NavLink)`
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.m};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.title};

  color: var(--Grey-Dark, #7b7b89);
  text-decoration: underline;
`;
