import Input from '../Input/Input';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {
  StyledRegisterForm,
  BtnSubmit,
  Title,
  // Message,
  // LoginLink,
} from './RegisterForm.styled';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { registerUser } from 'redux/auth/authOperations';
import Modal from 'react-modal';
import { useState } from 'react';

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

const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const initialValues = {
    name: '',
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

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //   subtitle.style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <Title>Реєстрація</Title>
        <StyledRegisterForm onSubmit={formik.handleSubmit}>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder={`Введіть ім'я`}
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.touched.name && formik.errors.name ? (
            <div>{formik.errors.name}</div>
          ) : null}
          {/* <Input type="text" placeholder="Введіть прізвище" /> */}
          {/* <Input type="tel" placeholder="Введіть номер телефону" /> */}
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            placeholder="Введіть email"
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
          <Input
            id="password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            placeholder="Введіть пароль"
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
          {/* <Input type="password" placeholder="Повторіть пароль" /> */}
          <BtnSubmit type="submit">Зареєструватися</BtnSubmit>
        </StyledRegisterForm>
      </Modal>
      {/* <Message>
        Якщо ви вже зареєстровані, перейдіть на
        <LoginLink to="/login">сторінку авторізації</LoginLink>.
      </Message> */}
    </>
  );
};

export default RegisterForm;
