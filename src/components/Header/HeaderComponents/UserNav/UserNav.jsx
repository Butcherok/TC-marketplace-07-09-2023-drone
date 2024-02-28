import React from 'react';

import { useAuth } from '../../../../contexts/AuthContext/AuthContext';
import {
  Link,
  Nav,
  NavItem,
  NavList,
  // StyledUserNavIcon,
} from './UserNav.styled';
import Icon from 'components/UI/Icon/Icon';

const UserNav = () => {
  const { state } = useAuth();

  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to={state.isAuthenticated ? '/user' : '/login'}>
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
  );
};

export default UserNav;
