import React from 'react';
import { Link } from 'react-router-dom';
import {
  LogoWrapper,
  LogoContainer,
  LogoMainText,
  LogoNoteText,
  LogoTextContainer,
  LogoIcon,
} from './Logo.styled';
import icon from '../../../../assets/icons/sprite.svg';

const Logo = ({ className, onClick }) => {
  return (
    <LogoWrapper className={className} onClick={onClick}>
      <Link to="/">
        <LogoContainer>
          {/* <LogoIcon src={logoIcon} alt="logo" /> */}
          <LogoIcon>
            <use href={`${icon}#icon-logo`}></use>
          </LogoIcon>
          <LogoTextContainer>
            <LogoMainText>
              DR.<span>ONE</span>
            </LogoMainText>
            <LogoNoteText>Дрони та все для них</LogoNoteText>
          </LogoTextContainer>
        </LogoContainer>
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
