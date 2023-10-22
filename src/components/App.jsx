import { Route, Routes } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/notFound';
import HomePage from '../pages/home';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<div>Каталог</div>} />
          <Route path="articles" element={<div>Статті</div>} />
          <Route path="manufacturers" element={<div>Виробники</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
