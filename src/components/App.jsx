import { Route, Routes } from 'react-router-dom';
import { ApiProvider } from '../contexts/ApiContext/ApiContext';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/notFound';
import HomePage from '../pages/home';
import LoginPage from '../pages/login';
import RegisterPage from '../pages/register';

export const App = () => {
  return (
    <>
      <ApiProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="products" element={<div>Магазин</div>} />
            <Route path="articles" element={<div>Статті</div>} />
            <Route path="manufacturers" element={<div>Виробники</div>} />
            <Route path="user" element={<div>Особистий кабінет</div>} />
            <Route path="favorites" element={<div>Перелік улюбленних</div>} />
            <Route path="cart" element={<div>Кошик</div>} />
  
            <Route path="drons" element={<div>Дрони</div>} />
            <Route path="accessories" element={<div>Аксесуари</div>} />
            <Route path="spare-parts" element={<div>Запчастини</div>} />
            <Route path="sets" element={<div>Набори</div>} />
  
            <Route path="about-us" element={<div>Про нас</div>} />
            <Route path="delivery" element={<div>Доставка і оплата</div>} />
            <Route path="returns" element={<div>Повернення та обмін</div>} />
            <Route path="contacts" element={<div>Контакти</div>} />
  
            <Route path="sellers" element={<div>Довідка про продавців</div>} />
            <Route path="tariffs" element={<div>Тарифи</div>} />
            <Route path="how-to-start" element={<div>Як почати продавати</div>} />
            <Route path="agreement" element={<div>Угода користувача</div>} />
            <Route path="begin" element={<div>Стати продавцем</div>} />
  
            <Route path="faq" element={<div>Найчастіші запитання</div>} />
            <Route path="support" element={<div>Підтримка</div>} />
            <Route path="contact-us" element={<div>Зв'язатися з нами</div>} />
  
            {/* <Route path="faq" element={<div>Найчастіші запитання</div>} />
            <Route path="support" element={<div>Підтримка</div>} />
            <Route path="contact-us" element={<div>Зв'язатися з нами</div>} /> */}
  
            <Route path="legal" element={<div>Політика конфіденційності</div>} />
            <Route path="offer" element={<div>Офетра</div>} />

            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ApiProvider>
    </>
  );
};
