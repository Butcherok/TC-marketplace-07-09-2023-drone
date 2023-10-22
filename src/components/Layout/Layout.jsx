import { Suspense } from 'react';
import Header from '../Header/Header';
import { Container } from 'styles';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Suspense fallback={null}>
          <Container>
            <Outlet />
          </Container>
        </Suspense>
      </main>
      <footer />
    </>
  );
};

export default Layout;
