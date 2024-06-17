import { Route, Routes, useLocation } from 'react-router-dom';

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
import CartPage from 'pages/cart';
// import ModalWrapper from './ModalWrapper/ModalWrapper';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authOperations';
import ArticlesPage from 'pages/articles';

export const App = () => {
  const dispatch = useDispatch();
  const { isLoading, isLoggedIn } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalRegister, setModalRegister] = useState(true);
  const [backgroundLocation, setBackgroundLocation] = useState(null);

  const location = useLocation();

  const openModal = () => {
    if (!isLoggedIn) {
      setIsModalOpen(true);
      document.body.style.overflow = 'hidden';
      setBackgroundLocation(location);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
    setBackgroundLocation(null);
  };

  function changeModalValue() {
    setModalRegister(!modalRegister);
  }

  return isLoading ? (
    <span>Loading...</span>
  ) : (
    <>
      <ApiProvider>
        <CategoryProvider>
          <Routes location={backgroundLocation}>
            <Route
              path="/"
              element={
                <Layout
                  openModal={openModal}
                  closeModal={closeModal}
                  isModalOpen={isModalOpen}
                  changeModalValue={changeModalValue}
                  modalRegister={modalRegister}
                />
              }
            >
              <Route index element={<HomePage />} />
              {/* <Route path="drones" element={<Products />} /> */}
              <Route path="articles" element={<ArticlesPage/>} />
              <Route path="manufacturers" element={<div>Виробники</div>} />

              <Route path="user" element={<UserPage />} />
              <Route path="register" element={<RegisterForm />} />
              <Route path="login" element={<LoginForm />} />
              <Route path="favorites" element={<div>Перелік улюбленних</div>} />
              <Route path="cart" element={<CartPage />} />
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
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </CategoryProvider>
      </ApiProvider>
    </>
  );
};
