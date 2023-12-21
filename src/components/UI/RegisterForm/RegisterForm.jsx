import Input from '../Input/Input';
import {
  StyledRegisterForm,
  BtnSubmit,
  Title,
  Message,
  LoginLink,
} from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <>
      <Title>Реєстрація</Title>
      <StyledRegisterForm>
        <Input type="text" placeholder={`Введіть ім'я`} />
        <Input type="text" placeholder="Введіть прізвище" />
        <Input type="tel" placeholder="Введіть номер телефону" />
        <Input type="email" placeholder="Введіть email" />
        <Input type="password" placeholder="Введіть пароль" />
        <Input type="password" placeholder="Повторіть пароль" />
        <BtnSubmit>Зареєструватися</BtnSubmit>
      </StyledRegisterForm>
      <Message>
        Якщо ви вже зареєстровані, перейдіть на{' '}
        <LoginLink to="/login">сторінку авторізації</LoginLink>.
      </Message>
    </>
  );
};

export default RegisterForm;
