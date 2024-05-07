import React from 'react';
import { useState } from 'react';
import RegisterForm from 'components/UI/RegisterForm/RegisterForm';
import LoginForm from 'components/UI/LoginForm/LoginForm';

import {
  StyledNavLink,
  Nav,
  NavItem,
  NavList,
} from './UserNav.styled';
import Icon from 'components/UI/Icon/Icon';

const UserNav = () => {
  // const {
  // isLoading,
  //   isLoggedIn,
  // } = useAuth();

  const [isModalOpen, setIsOpen] = useState(false);
  const [modalRegister, setModalRegister] = useState(true);

  function openModal() {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  }

  function changeModalValue() {
    setModalRegister(!modalRegister);
  }

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <StyledNavLink
              to={
                modalRegister === true
                  ? { pathname: '/register', state: { modal: true } }
                  : { pathname: '/login', state: { modal: true } }
              }
              onClick={openModal}
            >
              <Icon id="user" />
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to={'/favorites'}>
              <Icon id="favorite" />
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to={'/cart'}>
              <Icon id="cart" />
            </StyledNavLink>
          </NavItem>
        </NavList>
      </Nav>

      {modalRegister === true ? (
        <RegisterForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          changeModalValue={changeModalValue}
        />
      ) : (
        <LoginForm
          isModalOpen={isModalOpen}
          closeModal={closeModal}
          changeModalValue={changeModalValue}
        />
      )}
    </>
  );
};

export default UserNav;
