import RegisterForm from '../components/UI/RegisterForm/RegisterForm';
// import { useAuth } from '../contexts/AuthContext/AuthContext';
// import UserPage from './user';

const RegisterPage = () => {
  // const { state } = useAuth();
  // console.log(state);

  // return <>{state.isAuthenticated ? <UserPage /> : <RegisterForm />}</>;
  return (
    <>
      <RegisterForm />
    </>
  );
};

export default RegisterPage;
