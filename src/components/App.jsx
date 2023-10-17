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
          <Route path="products" element={<div>Products</div>} />
          <Route path="news" element={<div>News</div>} />
          <Route path="contacts" element={<div>Contacts</div>} />
          <Route path="about" element={<div>About Us</div>} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
