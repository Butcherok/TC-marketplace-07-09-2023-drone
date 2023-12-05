import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Logo from '../Logo/Logo';
import NavMobile from '../NavMobile/NavMobile';
import Information from '../Information/Information';
import FollowMobile from '../FollowMobile/FollowMobile';
import CopyrightMobile from '../CopyrightMobile/CopyrightMobile';

import { StyledBurgerMenu, Overlay } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const handleCloseMenu = () => {
    onClose();
  };

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={handleCloseMenu} />
      <StyledBurgerMenu isOpen={isOpen}>
        <Logo className="logo-burger" onClick={onClose} />
        <NavMobile />
        <Information />
        <FollowMobile />
        <CopyrightMobile />
      </StyledBurgerMenu>
    </>
  );
};

export default BurgerMenu;
