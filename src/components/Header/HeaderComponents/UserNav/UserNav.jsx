import React from 'react';

// import { useAuth } from '../../../../contexts/AuthContext/AuthContext';
import { useAuth } from 'useAuth';
import Modal from 'react-modal';
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
  // const { state } = useAuth();
  const {
    // isLoading,
    isLoggedIn,
  } = useAuth();

  const [modalIsOpen, setIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '40px 12px',
      transform: 'translate(-50%, -50%)',
    },
  };

  function openModal() {
    setIsOpen(true);
  }

  // function afterOpenModal() {
  //   // references are now sync'd and can be accessed.
  //  style.color = '#f00';
  // }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Nav>
        <NavList>
          <NavItem>
            <Link to={isLoggedIn ? '/user' : '/login'} onClick={openModal}>
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

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <RegisterForm />
        {/* <LoginForm /> */}
      </Modal>
    </>
  );
};

export default UserNav;
