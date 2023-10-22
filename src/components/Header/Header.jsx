import React from 'react';
import { HeaderContainer, StyledHeader } from './Header.styled';
import Logo from './HeaderComponents/Logo/Logo';
import SearchBar from './HeaderComponents/SearchBar/SearchBar';
import UserNav from './HeaderComponents/UserNav/UserNav';
import NavBar from './HeaderComponents/Nav/Nav';

const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <NavBar />
        <SearchBar />
        <UserNav />
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
