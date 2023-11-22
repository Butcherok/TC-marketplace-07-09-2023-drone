import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container } from 'styles';
import { StyledMain } from './Layout.styled';
import { Outlet } from 'react-router-dom';
import Footer from 'components/Footer/Footer';

const Layout = props => {
  return (
    <>
      <Header />
      <StyledMain>
        <Suspense fallback={null}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </StyledMain>
      <Footer />
    </>
  );
};

export default Layout;
