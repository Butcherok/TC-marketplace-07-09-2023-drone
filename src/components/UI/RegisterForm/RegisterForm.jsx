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
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import icon from '../../../assets/icons/sprite.svg';
import { useState } from 'react';

const validationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, ({ min }) => `Ім'я має містити не менше ${min} символів.`)
    .max(16, ({ max }) => `Ім'я має містити не більше ${max} символів.`)
    .required('Укажіть ваше ім’я.')
    .label('Name'),
  email: yup
    .string()
    .email('Укажіть свою електрону пошту.')
    .required(
      'Укажіть свою електрону пошту / на цю електронну пошту вже зареєстровано аккаунт.'
    ),
  password: yup
    .string()
    .min(6, ({ min }) => `Пароль має містити не менше ${min} символів.`)
    .max(16, ({ max }) => `Пароль має містити не більше ${max} символів.`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      'Пароль має містити не менше 6 символів хоча б одну літеру у верхньому, одну літеру у нижньому регістрі та одну літеру.'
    )
    .required('Введіть пароль.'),
  passwordRepeat: yup
    .string()
    .required('Невірний пароль.')
    .oneOf([yup.ref('password')], 'Невірний пароль.'),
});

const RegisterForm = ({ isModalOpen, closeModal, changeModalValue }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRepeat, setShowPasswordRepeat] = useState(false);

  // return <>{state.isAuthenticated ? <UserPage /> : <RegisterForm />}</>;
  const location = useLocation();
  // console.log(location);
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
    function pick(obj, ...props) {
      return props.reduce(function (result, prop) {
        result[prop] = obj[prop];
        return result;
      }, {});
    }

    const formValues = pick(values, 'firstName', 'email', 'password');

    dispatch(
      registerUser({
        ...formValues,
      })
    );

    resetForm();
    // navigate(-1);
    // navigate(location, { replace: true });
    navigate('/', { replace: true });
    closeModal();
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

    navigate(location, { replace: true });
    // navigate(-1);
  };

  return (
    <StyledModal
      isOpen={isModalOpen}
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
              autoComplete="username"
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
                autoComplete="new-password"
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
            <StyledLabel htmlFor="passwordRepeat">
              Повторіть пароль*
            </StyledLabel>

            <InputContainer>
              <Input
                id="passwordRepeat"
                type={showPasswordRepeat ? 'text' : 'password'}
                name="passwordRepeat"
                placeholder="********"
                autoComplete="new-password"
                onBlur={formik.handleBlur}
                border={
                  formik.touched.passwordRepeat &&
                  formik.errors.passwordRepeat &&
                  '0.8px solid #f33f33'
                }
                onChange={formik.handleChange}
                value={formik.values.passwordRepeat}
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
        <LoginLink to="/login" onClick={changeModalValue}>
          Увійти
        </LoginLink>
      </MessageContainer>
    </StyledModal>
  );
};

export default RegisterForm;
