import { useDispatch } from 'react-redux';
import { logoutUser } from 'redux/auth/authOperations';

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
  const dispatch = useDispatch();

  return (
    <>
      {/* <p>{`Hello, ${state.user}`}</p> */}
      <p>
        {/* <NavLink to="/login" onClick={handleClick}> */}
        {/* <NavLink to="/login">Вийти</NavLink> */}
        <button type="button" onClick={() => dispatch(logoutUser())}>
          Вийти
        </button>
      </p>
    </>
  );
};

export default UserPage;
