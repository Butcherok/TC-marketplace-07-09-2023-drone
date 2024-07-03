import { useFormik } from 'formik';
import {
  BtnSubmit,
  RetunBtn,
  ReturnIcon,
  StyledForm,
  StyledModal,
  Text,
  Title,
  ErrorMessage,
} from './RecoveryForm.styled';
import Input from 'components/UI/Input/Input';
import icon from '../../assets/icons/sprite.svg';
import * as yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';

const validationSchema = yup.object().shape({
  contact: yup
    .string()
    .test('contact-validation', 'Invalid email or phone number', value => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phoneRegex = /^[0-9]{10}$/;
      return emailRegex.test(value) || phoneRegex.test(value);
    })
    .required('Невірна пошта або номер телефону'),
});

const RecoveryForm = ({ isModalOpen, closeModal, setModalType }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const initialValues = {
    contact: '',
  };

  const resetForm = () => {
    formik.resetForm({
      values: initialValues,
    });
  };

  const onSubmit = values => {
    //   dispatch(
    //     loginUser({
    //       ...values,
    //     })
    //   );
    console.log(values);
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
    navigate(location, { replace: true });
    setModalType('register');
  };

  const goBackModal = () => {
    navigate(-1, { replace: true });
    // setModalType('register');
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
      <RetunBtn type="button">
        <ReturnIcon onClick={goBackModal}>
          <use href={`${icon}#icon-arrow-left`}></use>
        </ReturnIcon>
      </RetunBtn>

      <Title>Відновлення паролю</Title>
      <Text>
        Введіть електронну пошту або номер телефона на який зареєстрований
        особистий кабінет, ми надішлемо вам код відновлення
      </Text>

      <StyledForm onSubmit={formik.handleSubmit}>
        <Input
          id="contact"
          type="text"
          name="contact"
          placeholder="Пошта або номер телефону"
          //   autoComplete="username"
          onBlur={formik.handleBlur}
          border={
            formik.touched.contact &&
            formik.errors.contact &&
            '0.8px solid #f33f33'
          }
          onChange={formik.handleChange}
          value={formik.values.contact}
        />

        {formik.touched.contact && formik.errors.contact ? (
          <ErrorMessage>{formik.errors.contact}</ErrorMessage>
        ) : null}

        <BtnSubmit type="submit" onSubmit={onSubmit}>
          Далі
        </BtnSubmit>
      </StyledForm>
    </StyledModal>
  );
};

export default RecoveryForm;
