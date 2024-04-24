import Input from '../Input/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  StyledRegisterForm,
  BtnSubmit,
  Title,
  StyledLabel,
  InputList,
  StyledModal,
  StyledBtnList,
  StyledBtnItem,
  StyledBtn,
  StyledBtnIcon,
  StyledInputIcon,
  InputContainer,
  InputBtn,
  // Message,
  // LoginLink,
} from './RegisterForm.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import icon from '../../../assets/icons/sprite.svg';

const validationSchema = yup.object().shape({
  name: yup
    .string()
    .min(2, ({ min }) => `The name must be at least ${min} characters`)
    .max(16, ({ max }) => `The name must be no more than ${max} characters`)
    .required('Name is required')
    .label('Name'),
  email: yup
    .string()
    .email('Please enter valid email')
    .required('Email address is required'),
  password: yup
    .string()
    .min(6, ({ min }) => `The password must be at least ${min} characters`)
    .max(16, ({ max }) => `The password must be no more than ${max} characters`)
    .required('Password is required'),
});

const RegisterForm = ({ modalIsOpen, closeModal }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
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
    dispatch(
      registerUser({
        ...values,
      })
    );

    resetForm();
    navigate('/', { replace: true });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnSubmit: true,
  });

  return (
    <StyledModal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      // bodyOpenClassName={'ReactModal__Body--open'}
      style={{
        overlay: {
          zIndex: 1010,
        },
      }}
    >
      <Title>Реєстрація</Title>

      <StyledRegisterForm onSubmit={formik.handleSubmit}>
        <InputList>
          <li>
            <StyledLabel htmlFor="name">Ім'я*</StyledLabel>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder={`Ваше ім'я`}
              onChange={formik.handleChange}
              value={formik.values.name}
            />
            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}
          </li>
          <li>
            <StyledLabel htmlFor="email">Електронна пошта*</StyledLabel>
            <Input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              placeholder="email@example.com"
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}
          </li>
          <li>
            <StyledLabel htmlFor="password">Пароль*</StyledLabel>
            <InputContainer>
              <Input
                id="password"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                placeholder="********"
              />
              <StyledInputIcon>
                <use href={`${icon}#icon-closed-eye`}></use>
              </StyledInputIcon>
            </InputContainer>

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
          </li>
          <li>
            <StyledLabel htmlFor="password-repeat">
              Повторіть пароль*
            </StyledLabel>

            <InputContainer>
              <Input
                id="password-repeat"
                type="password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.passwordRepeat}
                placeholder="********"
              />

              <InputBtn>
                <StyledInputIcon>
                  <use href={`${icon}#icon-closed-eye`}></use>
                </StyledInputIcon>
              </InputBtn>
            </InputContainer>
          </li>
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
      {/* <Message>
        Якщо ви вже зареєстровані, перейдіть на
        <LoginLink to="/login">сторінку авторізації</LoginLink>.
      </Message> */}
    </StyledModal>
  );
};

export default RegisterForm;
