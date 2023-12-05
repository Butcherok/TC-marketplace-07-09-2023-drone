import React from 'react';
import { Link } from 'react-router-dom';
import {
  LogoWrapper,
  LogoContainer,
  LogoIcon,
  LogoMainText,
  LogoNoteText,
  LogoTextContainer,
} from './Logo.styled';
import logoIcon from '../../../../assets/icons/logo-icon.svg';

const Logo = ({className, onClick}) => {
  return (
    <LogoWrapper className={className} onClick={onClick}>
      <Link to="/">
        <LogoContainer>
          <LogoIcon src={logoIcon} alt="logo" />
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
