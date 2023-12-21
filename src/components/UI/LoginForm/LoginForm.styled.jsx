import { NavLink } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

export const Title = styled.h3`
  margin-bottom: 20px;
`;

export const StyledLoginForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
`;

export const BtnSubmit = styled(Button)`
  margin: 12px 0 18px;
`;

export const Message = styled.p``;

export const LoginLink = styled(NavLink)``;
