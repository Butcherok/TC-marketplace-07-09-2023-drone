import { ErrorMessage, useFormik } from 'formik';
import {
  BtnSubmit,
  RetunBtn,
  ReturnIcon,
  StyledForm,
  StyledModal,
  Text,
  Title,
} from './RecoveryForm.styled';
import Input from 'components/UI/Input/Input';
import icon from '../../assets/icons/sprite.svg';
import * as yup from 'yup';

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

const RecoveryForm = ({ isModalOpen, onSubmit, closeAndResetModal }) => {
  const initialValues = {
    email: '',
    password: '',
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnSubmit: true,
  });

  return (
    <StyledModal
      isOpen={isModalOpen}
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
          
      <Title>Відновлення паролю</Title>
      <Text>
        Введіть електронну пошту або номер телефона на який зареєстрований
        особистий кабінет, ми надішлемо вам код відновлення
      </Text>

      <StyledForm onSubmit={formik.handleSubmit}>
        <Input
          id="email"
          type="email"
          name="email"
          placeholder="email@example.com"
          autoComplete="username"
          onBlur={formik.handleBlur}
          border={
            formik.touched.email && formik.errors.email && '0.8px solid #f33f33'
          }
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        {formik.touched.email && formik.errors.email ? (
          <ErrorMessage>{formik.errors.email}</ErrorMessage>
        ) : null}

        <BtnSubmit type="submit" onSubmit={onSubmit}>
          Далі
        </BtnSubmit>
      </StyledForm>
    </StyledModal>
  );
};

export default RecoveryForm;
