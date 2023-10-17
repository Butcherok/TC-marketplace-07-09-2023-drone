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
          <Route path="catalog" element={<div>Catalog</div>} />{' '}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
