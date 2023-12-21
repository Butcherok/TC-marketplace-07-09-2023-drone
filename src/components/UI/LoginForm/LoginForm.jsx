import Input from '../Input/Input';
import {
  StyledLoginForm,
  BtnSubmit,
  Title,
  Message,
  LoginLink,
} from './LoginForm.styled';

const LoginForm = () => {
  return (
    <>
      <Title>Авторізація</Title>
      <StyledLoginForm>
        <Input type="text" placeholder="Введіть email" />
        <Input type="password" placeholder="Введіть пароль" />
        <BtnSubmit>Увійти</BtnSubmit>
      </StyledLoginForm>
      <Message>
        Якщо ви ще не зареєстровані, перейдіть на{' '}
        <LoginLink to="/register">сторінку реєстрації</LoginLink>.
      </Message>
    </>
  );
};

export default LoginForm;
