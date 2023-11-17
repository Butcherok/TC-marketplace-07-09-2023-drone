import React from 'react';
import {
  Link,
  Nav,
  NavItem,
  NavList,
  // StyledUserNavIcon,
} from './UserNav.styled';
import Icon from 'components/UI/Icon/Icon';
// import user from '../../../../assets/icons/UserNav/user.svg';
// import favorite from '../../../../assets/icons/UserNav/favorite.svg';
// import cart from '../../../../assets/icons/UserNav/cart.svg';

const UserNav = () => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link to={'/user'}>
            <Icon id="user" />
            {/* <StyledUserNavIcon src={user} alt="user-logo" /> */}
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/favorites'}>
          <Icon id="favorite" />
            {/* <StyledUserNavIcon src={favorite} alt="favorites-user" /> */}
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/cart'}>
            <Icon id="cart" />
            {/* <StyledUserNavIcon src={cart} alt="cart" /> */}
          </Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default UserNav;
