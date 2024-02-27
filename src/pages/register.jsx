import RegisterForm from '../components/UI/RegisterForm/RegisterForm';
import { useAuth } from '../contexts/AuthContext/AuthContext';
import { NavLink } from 'react-router-dom';


const RegisterPage = () => {
  const { state, dispatch } = useAuth();
  console.log(state);

  const handleClick = () => {
    dispatch({
      type: 'LOGOUT',
      payload: {
        isAuthenticated: false,
        user: null,
        token: null,
      },
    });
  };

  return (
    <>
      {state.isAuthenticated ? (
        <>
          <p>{`Hello, ${state.user}`}</p>
          <p>
            <NavLink onClick={handleClick}>Вийти</NavLink>
          </p>
        </>
      ) : (
        <RegisterForm />
      )}
    </>
  );
};

export default RegisterPage;
