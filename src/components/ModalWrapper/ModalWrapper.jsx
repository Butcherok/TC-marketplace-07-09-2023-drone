import RecoveryForm from 'components/RecoveryForm/RecoveryForm';
import LoginForm from 'components/UI/LoginForm/LoginForm';
import RegisterForm from 'components/UI/RegisterForm/RegisterForm';
// import { Outlet } from 'react-router-dom';

const ModalWrapper = ({
  closeModal,
  isModalOpen,
  openModal,
  setModalType,
  modalType,
}) => {
  //   const location = useLocation();
  //   const backgroundLocation = location.state?.backgroundLocation;

  //   console.log('backgroundLocation', backgroundLocation);
  //   console.log('location', location);

  if (isModalOpen && modalType === 'register') {
    return (
      <RegisterForm
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
        setModalType={setModalType}
      />
    );
  } else if (isModalOpen && modalType === 'login') {
    return (
      <LoginForm
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
        setModalType={setModalType}
      />
    );
  } else if (isModalOpen && modalType === 'recovery') {
    return (
      <RecoveryForm
        isModalOpen={isModalOpen}
        closeModal={closeModal}
        openModal={openModal}
        setModalType={setModalType}
      />
    );
  } else {
    return null;
  }
};
export default ModalWrapper;
