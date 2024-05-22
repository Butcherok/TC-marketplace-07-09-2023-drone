import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import Input from '../Input/Input';
import {
  StyledModal,
  RetunBtn,
  ReturnIcon,
  StyledLoginForm,
  BtnSubmit,
  Title,
  InputList,
  InputContainer,
  InputBtn,
  StyledInputIcon,
  InputItem,
  StyledLabel,
  StyledBtnList,
  StyledBtnItem,
  StyledBtn,
  StyledBtnIcon,
  ErrorMessage,
  MessageContainer,
  Message,
  ModalLink,
} from './LoginForm.styled';
import icon from '../../../assets/icons/sprite.svg';
import { useDispatch } from 'react-redux';
import { loginUser } from 'redux/auth/authOperations';
import { useFormik } from 'formik';

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Будь ласка введіть валідну пошту.')
    .required('Невірна електронна пошта.'),
  password: yup
    .string()
    .min(6, ({ min }) => `Пароль має містити не менше ${min} символів.`)
    .max(16, ({ max }) => `Пароль має містити не більше ${max} символів.`)
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
      'Пароль має містити не менше 6 символів хоча б одну літеру у верхньому, одну літеру у нижньому регістрі та одну літеру.'
    )
    .required('Невірний пароль.'),
});

const LoginForm = ({ isModalOpen, closeModal, changeModalValue }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState(false);

  const initialValues = {
    email: '',
    password: '',
  };

  const resetForm = () => {
    formik.resetForm({
      values: initialValues,
    });
  };

  const onSubmit = values => {
    dispatch(
      loginUser({
        ...values,
      })
    );

    resetForm();
    // navigate('/', { replace: true });
    navigate(-1);
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
    // navigate('/', { replace: true });
    navigate(-1);
  };

  return (
    <>
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
        <Title>Вхід</Title>
        <StyledLoginForm onSubmit={formik.handleSubmit}>
          <InputList>
            <InputItem>
              <StyledLabel htmlFor="email">Пошта</StyledLabel>
              <Input
                id="email"
                type="email"
                name="email"
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
              <StyledLabel htmlFor="password">Пароль</StyledLabel>

              <InputContainer>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="********"
                  autoComplete="current-password"
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

          <BtnSubmit type="submit" onSubmit={onSubmit}>
            Увійти
          </BtnSubmit>
        </StyledLoginForm>

        <MessageContainer>
          <Message>
            Створіть аккаунт для легкої купівлі та продажу прямо зараз!
            <ModalLink to="/register" onClick={changeModalValue}>
              Зареєструватись
            </ModalLink>
          </Message>

          <Message>
            Забули пароль?
            <ModalLink>Відновити</ModalLink>
          </Message>
        </MessageContainer>
      </StyledModal>
    </>
  );
};

export default LoginForm;
