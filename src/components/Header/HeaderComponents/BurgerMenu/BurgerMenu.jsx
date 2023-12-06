import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import NavMobile from '../NavMobile/NavMobile';
import Information from '../Information/Information';
import FollowMobile from '../FollowMobile/FollowMobile';
import CopyrightMobile from '../CopyrightMobile/CopyrightMobile';
import Close from '../../../UI/Icon/Icon';

import { StyledBurgerMenu, Overlay } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, onClose }) => {
  const location = useLocation();
  const [startX, setStartX] = useState(0);
  const [endX, setEndX] = useState(0);

  const handleCloseMenu = () => {
    onClose();
  };

  const handleTouchStart = e => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = e => {
    setEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (endX - startX > 50) {
      // Якщо рух пальця вліво більше 50 пікселів, закриваємо меню
      onClose();
    }
    // Очищаємо дані про торкання
    setStartX(0);
    setEndX(0);
  };

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={handleCloseMenu} />
      <StyledBurgerMenu
        isOpen={isOpen}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="logo-block">
          <Logo className="logo-burger" onClick={onClose} />
          <Close id="cross" onClick={onClose} />
        </div>
        <NavMobile />
        <Information />
        <FollowMobile />
        <CopyrightMobile />
      </StyledBurgerMenu>
    </>
  );
};

export default BurgerMenu;
