import { NavLink } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const RegisterFormContainer = styled.div`
  width: 728px;
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

export const UserBtnContainer = styled.div`
  margin-bottom: 32px;

  display: flex;
  align-items: center;
  column-gap: 20px;
`;

export const UserBtn = styled.button`
  width: 345px;
  padding: 10px 10px 10px 20px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.colors.btnColor};

  color: ${props => props.theme.colors.btnColor};

  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.s};
  font-weight: ${props => props.theme.fontWeights.bold};
  line-height: ${props => props.theme.lineHeights.title};
`;

export const StyledRegisterForm = styled.form``;

export const InputList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StyledLabel = styled.label`
  display: block;
  color: ${props => props.theme.colors.greyDark};
  font-family: ${props => props.theme.fonts.main};
  font-size: ${props => props.theme.fontSizes.xs};
  font-weight: ${props => props.theme.fontWeights.normal};
  line-height: ${props => props.theme.lineHeights.button};
`;

export const BtnSubmit = styled.button`
  width: 704px;
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
