import LoginForm from 'components/UI/LoginForm/LoginForm';
import RegisterForm from 'components/UI/RegisterForm/RegisterForm';
// import { Outlet } from 'react-router-dom';

const ModalWrapper = ({
  closeModal,
  isModalOpen,
  openModal,
  changeModalValue,
  modalRegister,
}) => {
  //   const location = useLocation();
  //   const backgroundLocation = location.state?.backgroundLocation;

  //   console.log('backgroundLocation', backgroundLocation);
  //   console.log('location', location);

  return (
    <>
      {isModalOpen && modalRegister === true ? (
        <RegisterForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          openModal={openModal}
          changeModalValue={changeModalValue}
        />
      ) : (
        <LoginForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          openModal={openModal}
          changeModalValue={changeModalValue}
        />
      )}
    </>
  );
};
export default ModalWrapper;
