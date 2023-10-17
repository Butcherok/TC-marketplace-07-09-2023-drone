import React from 'react';
import { HeaderContainer, Link, Nav, NavItem, NavList } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
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
  );
};

export default Header;
