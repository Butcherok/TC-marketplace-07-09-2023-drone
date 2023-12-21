import Input  from '../Input/Input';
import { StyledLoginForm, BtnSubmit } from './LoginForm.styled';

const LoginForm = () => {
  return (
    <StyledLoginForm>
      <Input type='text' placeholder='Введіть email' />
      <Input type='password' placeholder='Введіть пароль' />
      <BtnSubmit>Увійти</BtnSubmit>
    </StyledLoginForm>
  );
};

export default LoginForm;