import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container } from 'styles';
import { StyledMain } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';
import ModalWrapper from 'components/ModalWrapper/ModalWrapper';

const Layout = ({
  props,
  openModal,
  closeModal,
  isModalOpen,
  changeModalValue,
  modalRegister,
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
              changeModalValue={changeModalValue}
              modalRegister={modalRegister}
            />
          </Container>
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
