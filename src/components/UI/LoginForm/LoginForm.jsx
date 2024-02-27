import axios from 'axios';
import { useState } from 'react';

import Input from '../Input/Input';
import {
  StyledLoginForm,
  BtnSubmit,
  Title,
  Message,
  LoginLink,
} from './LoginForm.styled';
import { useAuth } from '../../../contexts/AuthContext/AuthContext';

const LoginForm = () => {
  const { dispatch } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleFormSubmit = async e => {
    e.preventDefault();

    try {
      const response = await axios.post(
        'https://dr-one-marketplace.onrender.com/users/login',
        formData,
        {
          auth: {
            username: 'admin',
            password: '123456',
          },
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const userData = response.data.user.email;
      const token = response.data.token;

      console.log(response.data);
      console.log('Token:', token);
      dispatch({
        type: 'LOGIN',
        payload: {
          isAuthenticated: true,
          user: userData,
          token: token,
        },
      });
      console.log('Ви авторизувались');
      // console.log(state.isAuthenticated);
    } catch (error) {
      console.error('Помилка авторизації', error);
    }
  };

  return (
    <>
      <Title>Авторізація</Title>
      <StyledLoginForm onSubmit={handleFormSubmit}>
        <Input
          type="email"
          name="email"
          placeholder="Введіть email"
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Введіть пароль"
          onChange={handleInputChange}
        />
        <BtnSubmit type="submit">Увійти</BtnSubmit>
      </StyledLoginForm>
      <Message>
        Якщо ви ще не зареєстровані, перейдіть на{' '}
        <LoginLink to="/register">сторінку реєстрації</LoginLink>.
      </Message>
    </>
  );
};

export default LoginForm;
