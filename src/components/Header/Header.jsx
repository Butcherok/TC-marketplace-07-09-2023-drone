import React from 'react';
import {
  HeaderContainer,
  Link,
  Nav,
  NavItem,
  NavList,
  StyledHeader,
} from './Header.styled';
import Logo from './HeaderComponents/Logo/Logo';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Nav>
          <NavList>
            <NavItem>
              <Link to={'/'}>Home</Link>
            </NavItem>
            <NavItem>
              <Link to={'/products'}>Products</Link>
            </NavItem>
            <NavItem>
              <Link to={'/news'}>News</Link>
            </NavItem>
            <NavItem>
              <Link to={'/contacts'}>Contacts</Link>
            </NavItem>
            <NavItem>
              <Link to={'/about'}>About Us</Link>
            </NavItem>
          </NavList>
        </Nav>
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
