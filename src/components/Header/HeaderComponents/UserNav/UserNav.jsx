import React from 'react';

// import { useAuth } from 'useAuth';
// import Modal from 'react-modal';
import { useState } from 'react';
import RegisterForm from 'components/UI/RegisterForm/RegisterForm';
// import LoginForm from 'components/UI/LoginForm/LoginForm';

import {
  Link,
  Nav,
  NavItem,
  NavList,
  // StyledUserNavIcon,
} from './UserNav.styled';
import Icon from 'components/UI/Icon/Icon';

const UserNav = () => {
  // const {
  // isLoading,
  //   isLoggedIn,
  // } = useAuth();

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <Link
              // to={
              //   isLoggedIn
              //     ? '/user'
              //     : { path: '/login', state: { modal: true } }
              // }
              // to={{ path: '/login', state: { modal: true } }}
              to={{ path: '/register', state: { modal: true } }}
              onClick={openModal}
            >
              <Icon id="user" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to={'/favorites'}>
              <Icon id="favorite" />
            </Link>
          </NavItem>
          <NavItem>
            <Link to={'/cart'}>
              <Icon id="cart" />
            </Link>
          </NavItem>
        </NavList>
      </Nav>

      <RegisterForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
      {/* <LoginForm modalIsOpen={modalIsOpen} closeModal={closeModal} /> */}
    </>
  );
};

export default UserNav;
