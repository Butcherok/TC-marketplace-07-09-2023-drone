import React from 'react';
import { Link } from 'react-router-dom';
import { LogoContainer, LogoIcon, LogoMainText, LogoNoteText, LogoTextContainer } from './Logo.styled';
import logoIcon from '../../../../assets/icons/logo-icon.svg';

const Logo = () => {
  return (
    <Link to="/">
      <LogoContainer>
        <LogoIcon src={logoIcon} alt="logo" />
        <LogoTextContainer>
          <LogoMainText>DR.<span>ONE</span></LogoMainText>
          <LogoNoteText>Дрони та все для них</LogoNoteText>
        </LogoTextContainer>
      </LogoContainer>
    </Link>
  );
};

export default Logo;
