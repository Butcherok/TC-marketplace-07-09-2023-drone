import React from 'react';
import { FooterContentStyled } from './FooterContent.styled';
import Logo from 'components/Header/HeaderComponents/Logo/Logo';

const FooterContent = () => {
  return (
    <FooterContentStyled>
      <Logo />
      <div>Footer content</div>
    </FooterContentStyled>
  );
};

export default FooterContent;
