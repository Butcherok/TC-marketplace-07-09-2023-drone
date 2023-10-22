import React from 'react';
import { Link } from 'react-router-dom';
import logoPng from '../../../../assets/logo.png';
import StyledLogo from './Logo.styled';

const Logo = () => {
  return (
    <Link to="/">
      <StyledLogo src={logoPng} alt="logo" />
    </Link>
  );
};

export default Logo;
