import { useState } from 'react';

import { StyledBurger } from './Burger.styled';
import Icon from '../../../UI/Icon/Icon';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Burger = () => {
  const [isBurgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const handleClickBurger = () => {
    setBurgerMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setBurgerMenuOpen(false);
  };

  return (
    <>
      <StyledBurger>
        <Icon id="burger" onClick={handleClickBurger} />
      </StyledBurger>
      <BurgerMenu isOpen={isBurgerMenuOpen} onClose={handleCloseMenu} />
    </>
  );
};

export default Burger;
