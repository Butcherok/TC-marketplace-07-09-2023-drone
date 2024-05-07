import { Route, Routes } from 'react-router-dom';

import { ApiProvider } from '../contexts/ApiContext/ApiContext';
import { CategoryProvider } from '../contexts/CategoryContext/CategoryContext';
import { useAuth } from 'useAuth';
import Layout from '../components/Layout/Layout';
import NotFound from '../pages/notFound';
import HomePage from '../pages/home';
import UserPage from '../pages/user';
import Products from '../pages/products';
import ProductPage from 'pages/productPage';
import DescriptionCharacteristics from './Characteristics/AllCharacteristics/DescriptionCharacteristics/DescriptionCharacteristics';
import UsefulInformation from './Characteristics/AllCharacteristics/UsefulInformation/UsefulInformation';
import Payment from './Payment/Payment';
import Delivery from './Delivery/Delivery';
import Comments from './Characteristics/AllCharacteristics/Comments/Comments';
import RegisterForm from './UI/RegisterForm/RegisterForm';
import LoginForm from './UI/LoginForm/LoginForm';

export const App = () => {
  const {
    // isLoading,
    isLoggedIn,
  } = useAuth();

  return (
    <>
      <ApiProvider>
        <CategoryProvider>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              {/* <Route path="drones" element={<Products />} /> */}
              <Route path="articles" element={<div>Статті</div>} />
              <Route path="manufacturers" element={<div>Виробники</div>} />
              <Route
                path="user"
                // element={state.isAuthenticated ? <UserPage /> : <LoginPage />}
                element={isLoggedIn ? <UserPage /> : <LoginForm />}
              />
              <Route path="favorites" element={<div>Перелік улюбленних</div>} />
              <Route path="cart" element={<div>Кошик</div>} />

              <Route path="drones" element={<Products />} />
              <Route path="drones/:dronId" element={<ProductPage />}>
                {window.innerWidth >= 1440 && (
                  <>
                    <Route index element={<DescriptionCharacteristics />} />
                    <Route path="useful" element={<UsefulInformation />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="delivery" element={<Delivery />} />
                    <Route path="comments" element={<Comments />} />
                  </>
                )}
              </Route>
              <Route path="accessories" element={<Products />} />
              <Route path="accessories/:accessoryId" element={<ProductPage />}>
                {window.innerWidth >= 1440 && (
                  <>
                    <Route index element={<DescriptionCharacteristics />} />
                    <Route path="useful" element={<UsefulInformation />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="delivery" element={<Delivery />} />
                    <Route path="comments" element={<Comments />} />
                  </>
                )}
              </Route>
              <Route path="parts" element={<Products />} />
              <Route path="parts/:partId" element={<ProductPage />}>
                {window.innerWidth >= 1440 && (
                  <>
                    <Route index element={<DescriptionCharacteristics />} />
                    <Route path="useful" element={<UsefulInformation />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="delivery" element={<Delivery />} />
                    <Route path="comments" element={<Comments />} />
                  </>
                )}
              </Route>
              <Route path="sets" element={<Products />} />
              <Route path="sets/:setId" element={<ProductPage />}>
                {window.innerWidth >= 1440 && (
                  <>
                    <Route index element={<DescriptionCharacteristics />} />
                    <Route path="useful" element={<UsefulInformation />} />
                    <Route path="payment" element={<Payment />} />
                    <Route path="delivery" element={<Delivery />} />
                    <Route path="comments" element={<Comments />} />
                  </>
                )}
              </Route>

              <Route path="about-us" element={<div>Про нас</div>} />
              <Route path="delivery" element={<div>Доставка і оплата</div>} />
              <Route path="returns" element={<div>Повернення та обмін</div>} />
              <Route path="contacts" element={<div>Контакти</div>} />

              <Route
                path="sellers"
                element={<div>Довідка про продавців</div>}
              />
              <Route path="tariffs" element={<div>Тарифи</div>} />
              <Route
                path="how-to-start"
                element={<div>Як почати продавати</div>}
              />
              <Route path="agreement" element={<div>Угода користувача</div>} />
              <Route path="begin" element={<div>Стати продавцем</div>} />

              <Route path="faq" element={<div>Найчастіші запитання</div>} />
              <Route path="support" element={<div>Підтримка</div>} />
              <Route path="contact-us" element={<div>Зв'язатися з нами</div>} />

              {/* <Route path="faq" element={<div>Найчастіші запитання</div>} />
            <Route path="support" element={<div>Підтримка</div>} />
            <Route path="contact-us" element={<div>Зв'язатися з нами</div>} /> */}

              <Route
                path="legal"
                element={<div>Політика конфіденційності</div>}
              />
              <Route path="offer" element={<div>Офетра</div>} />
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LoginForm />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CategoryProvider>
      </ApiProvider>
    </>
  );
};
