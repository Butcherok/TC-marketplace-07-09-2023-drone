import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

import Logo from '../Logo/Logo';
import NavMobile from '../NavMobile/NavMobile';
import Information from '../Information/Information';
import FollowMobile from '../FollowMobile/FollowMobile';
import CopyrightMobile from '../CopyrightMobile/CopyrightMobile';
import Close from '../../../UI/Icon/Icon';

import { StyledBurgerMenu, Overlay } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, onClose }) => {
  const location = useLocation();

  const handleCloseMenu = () => {
    onClose();
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => onClose(),
    preventDefaultTouchmoveEvent: true,
  });

  useEffect(() => {
    onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      <Overlay isOpen={isOpen} onClick={handleCloseMenu} />
      <StyledBurgerMenu isOpen={isOpen} {...handlers}>
        <div className="logo-block">
          <Logo className="logo-burger" onClick={onClose} />
          <Close id="cross" onClick={onClose} className='close' />
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
