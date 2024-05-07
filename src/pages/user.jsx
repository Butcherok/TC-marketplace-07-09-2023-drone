import {
  NavLink,
  // useNavigate
} from 'react-router-dom';

const UserPage = () => {
  // const { state, dispatch } = useAuth();
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   dispatch({
  //     type: 'LOGOUT',
  //     payload: {
  //       isAuthenticated: false,
  //       user: null,
  //       token: null,
  //     },
  //   });
  //   navigate('/login');
  // };

  return (
    <>
      {/* <p>{`Hello, ${state.user}`}</p> */}
      <p>
        {/* <NavLink to="/login" onClick={handleClick}> */}
        <NavLink to="/login">Вийти</NavLink>
      </p>
    </>
  );
};

export default UserPage;
