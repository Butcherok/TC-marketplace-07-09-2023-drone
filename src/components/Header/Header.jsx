import React, { useState } from 'react';

import { useCategory } from '../../contexts/CategoryContext/CategoryContext';
import { HeaderContainer, StyledHeader } from './Header.styled';
import Logo from './HeaderComponents/Logo/Logo';
import SearchBar from './HeaderComponents/SearchBar/SearchBar';
import UserNav from './HeaderComponents/UserNav/UserNav';
import NavBar from './HeaderComponents/Nav/Nav';
import Burger from './HeaderComponents/Burger/Burger';
import SearchBarMobile from './HeaderComponents/SearchBarMobile/SearchBarMobile';

const Header = () => {
  const [isShowMobileSearch, setIsShowMobileSearch] = useState(false);
  const { selectedCategory, handleCategoryChange } = useCategory();

  const handleSearchClick = () => {
    setIsShowMobileSearch(!isShowMobileSearch);
  };

  return (
    <StyledHeader>
      <HeaderContainer>
        <Burger />
        <Logo />
        <NavBar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
        <SearchBar onClick={handleSearchClick} />
        <UserNav />
        {isShowMobileSearch && (
          <SearchBarMobile isShowMobileSearch={isShowMobileSearch} />
        )}
      </HeaderContainer>
    </StyledHeader>
  );
};

export default Header;
