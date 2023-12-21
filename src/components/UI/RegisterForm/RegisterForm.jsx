import Input  from '../Input/Input';
import { StyledRegisterForm, BtnSubmit } from './RegisterForm.styled';

const RegisterForm = () => {
  return (
    <StyledRegisterForm>
      <Input type='text' placeholder={`Введіть ім'я`} />
      <Input type='text' placeholder='Введіть прізвище' />
      <Input type='tel' placeholder='Введіть номер телефону' />
      <Input type='email' placeholder='Введіть email' />
      <Input type='password' placeholder='Введіть пароль' />
      <Input type='password' placeholder='Повторіть пароль' />
      <BtnSubmit>Зареєструватися</BtnSubmit>
    </StyledRegisterForm>
  );
};

export default RegisterForm;