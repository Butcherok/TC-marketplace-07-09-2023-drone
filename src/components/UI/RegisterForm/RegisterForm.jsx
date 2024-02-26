import { useState } from 'react';
import axios from 'axios';

import Input from '../Input/Input';
import {
  StyledRegisterForm,
  BtnSubmit,
  Title,
  Message,
  LoginLink,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    name: '',
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
        'https://dr-one-marketplace.onrender.com/users/register',
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
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        console.error(
          'Помилка реєстрації',
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        console.error('Помилка реєстрації', 'Не отримано відповіді');
      } else {
        console.error('Помилка реєстрації', error.message);
      }
    }
  };

  return (
    <>
      <Title>Реєстрація</Title>
      <StyledRegisterForm onSubmit={handleFormSubmit}>
        <Input
          type="text"
          name="name"
          placeholder={`Введіть ім'я`}
          // value={formData.name}
          onChange={handleInputChange}
        />{' '}
        {/* <Input type="text" placeholder="Введіть прізвище" /> */}
        {/* <Input type="tel" placeholder="Введіть номер телефону" /> */}
        <Input
          type="email"
          name="email"
          placeholder="Введіть email"
          // value={formData.email}
          onChange={handleInputChange}
        />
        <Input
          type="password"
          name="password"
          placeholder="Введіть пароль"
          // value={formData.password}
          onChange={handleInputChange}
        />
        {/* <Input type="password" placeholder="Повторіть пароль" /> */}
        <BtnSubmit type="submit">Зареєструватися</BtnSubmit>
      </StyledRegisterForm>
      <Message>
        Якщо ви вже зареєстровані, перейдіть на{' '}
        <LoginLink to="/login">сторінку авторізації</LoginLink>.
      </Message>
    </>
  );
};

export default RegisterForm;
