import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container } from 'styles';
import { StyledMain } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';

const Layout = ({
  openModal,
  closeModal,
  isModalOpen,
  // changeModalValue,
  setModalType,
  modalType,
}) => {
  return (
    <>
      <Header openModal={openModal} />
      <StyledMain>
        <Suspense fallback={null}>
          <Container>
            <Outlet />
            <ModalWrapper
              isModalOpen={isModalOpen}
              closeModal={closeModal}
              // changeModalValue={changeModalValue}
              setModalType={setModalType}
              modalType={modalType}
            />
          </Container>
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
