import Input from '../Input/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  RetunBtn,
  ReturnIcon,
  StyledRegisterForm,
  BtnSubmit,
  Title,
  StyledLabel,
  InputList,
  InputItem,
  StyledModal,
  StyledBtnList,
  StyledBtnItem,
  StyledBtn,
  StyledBtnIcon,
  StyledInputIcon,
  InputContainer,
  InputBtn,
  ErrorMessage,
  MessageContainer,
  Message,
  LoginLink,
} from './RegisterForm.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import icon from '../../../assets/icons/sprite.svg';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, ({ min }) => `The name must be at least ${min} characters`)
    .max(16, ({ max }) => `The name must be no more than ${max} characters`)
    .required('Укажіть ваше ім’я.')
    .label('Name'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required(
      'Укажіть свою електрону пошту / на цю електронну пошту вже зареєстровано аккаунт.'
    ),
  password: yup
    .string()
    .min(6, ({ min }) => `The password must be at least ${min} characters`)
    .max(16, ({ max }) => `The password must be no more than ${max} characters`)
    .required(
      'Пароль має містити не менше 8 символів хоча б одну літеру у верхньому та нижньому регістрі.'
    ),
  passwordRepeat: yup
    .string()
    .required('Невірний пароль.')
    .oneOf([yup.ref('password')], 'Невірний пароль.'),
  // .required('Невірний пароль.'),
});

const RegisterForm = ({ modalIsOpen, closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);
  // const { state = {} } = location;
  // const { modal } = state;

  const initialValues = {
    firstName: '',
    email: '',
    password: '',
    passwordRepeat: '',
  };

  const resetForm = () => {
    formik.resetForm({
      values: initialValues,
    });
  };

  const onSubmit = values => {
    // if (formik.values.password === formik.values.passwordRepeat) {

    function pick(obj, ...props) {
      return props.reduce(function (result, prop) {
        result[prop] = obj[prop];
        return result;
      }, {});
    }

    const formValues = pick(values, 'firstName', 'email', 'password');

    dispatch(
      registerUser({
        // ...values,
        ...formValues,
      })
    );
    // console.log(values.passwordRepeat, values);
    console.log(formValues);

    resetForm();
    navigate('/', { replace: true });
    // }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnSubmit: true,
  });

  const closeAndResetModal = () => {
    closeModal();
    resetForm();
    navigate(-1, { replace: true });
  };

  console.log();
  // console.log(formik.handleSubmit);

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeAndResetModal}
      ariaHideApp={false}
      style={{
        overlay: {
          zIndex: 1010,
        },
      }}
    >
      {window.innerWidth < 1440 && (
        <RetunBtn type="button">
          <ReturnIcon onClick={closeAndResetModal}>
            <use href={`${icon}#icon-arrow-left`}></use>
          </ReturnIcon>
        </RetunBtn>
      )}

      <Title>Реєстрація</Title>

      <StyledRegisterForm onSubmit={formik.handleSubmit}>
        <InputList>
          <InputItem>
            <StyledLabel htmlFor="firstName">Ім'я*</StyledLabel>
            <Input
              id="firstName"
              name="firstName"
              type="text"
              placeholder={`Ваше ім'я`}
              onBlur={formik.handleBlur}
              border={
                formik.touched.firstName &&
                formik.errors.firstName &&
                '0.8px solid #f33f33'
              }
              onChange={formik.handleChange}
              value={formik.values.firstName}
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <ErrorMessage>{formik.errors.firstName}</ErrorMessage>
            ) : null}
          </InputItem>

          <InputItem>
            <StyledLabel htmlFor="email">Електронна пошта*</StyledLabel>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onBlur={formik.handleBlur}
              border={
                formik.touched.email &&
                formik.errors.email &&
                '0.8px solid #f33f33'
              }
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <ErrorMessage>{formik.errors.email}</ErrorMessage>
            ) : null}
          </InputItem>
          <InputItem>
            <StyledLabel htmlFor="password">Пароль*</StyledLabel>
            <InputContainer>
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="********"
                onBlur={formik.handleBlur}
                border={
                  formik.touched.password &&
                  formik.errors.password &&
                  '0.8px solid #f33f33'
                }
                onChange={formik.handleChange}
                value={formik.values.password}
              />

              <InputBtn type="button">
                {showPassword ? (
                  <StyledInputIcon
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <use href={`${icon}#icon-opened-eye`}></use>
                  </StyledInputIcon>
                ) : (
                  <StyledInputIcon
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    <use href={`${icon}#icon-closed-eye`}></use>
                  </StyledInputIcon>
                )}
              </InputBtn>
            </InputContainer>

            {formik.touched.password && formik.errors.password ? (
              <ErrorMessage>{formik.errors.password}</ErrorMessage>
            ) : null}
          </InputItem>

          <InputItem>
            <StyledLabel htmlFor="password-repeat">
              Повторіть пароль*
            </StyledLabel>

            <InputContainer>
              <Input
                id="passwordRepeat"
                type={showPasswordRepeat ? 'text' : 'password'}
                name="passwordRepeat"
                placeholder="********"
                onBlur={formik.handleBlur}
                border={
                  formik.touched.passwordRepeat &&
                  formik.errors.passwordRepeat &&
                  '0.8px solid #f33f33'
                }
                onChange={formik.handleChange}
                value={formik.values.passwordRepeat}
                // style={{ webkitTextSecurity: '*' }}
              />

              <InputBtn type="button">
                {showPasswordRepeat ? (
                  <StyledInputIcon
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  >
                    <use href={`${icon}#icon-opened-eye`}></use>
                  </StyledInputIcon>
                ) : (
                  <StyledInputIcon
                    onClick={() => setShowPasswordRepeat(!showPasswordRepeat)}
                  >
                    <use href={`${icon}#icon-closed-eye`}></use>
                  </StyledInputIcon>
                )}
              </InputBtn>
            </InputContainer>

            {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
              <ErrorMessage>{formik.errors.passwordRepeat}</ErrorMessage>
            ) : null}
          </InputItem>
        </InputList>

        <StyledBtnList>
          <StyledBtnItem>
            <StyledBtn>
              <StyledBtnIcon>
                <use href={`${icon}#icon-facebook`}></use>
              </StyledBtnIcon>
              Facebook
            </StyledBtn>
          </StyledBtnItem>
          <StyledBtnItem>
            <StyledBtn>
              <StyledBtnIcon>
                <use href={`${icon}#icon-google`}></use>
              </StyledBtnIcon>
              Google
            </StyledBtn>
          </StyledBtnItem>
        </StyledBtnList>

        <BtnSubmit type="submit">Зареєструватись</BtnSubmit>
      </StyledRegisterForm>

      <MessageContainer>
        <Message>Вже маєте аккаунт?</Message>
        <LoginLink to="/login">Увійти</LoginLink>
      </MessageContainer>
    </StyledModal>
  );
};

export default RegisterForm;
