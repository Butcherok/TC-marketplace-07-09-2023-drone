import React from 'react';
import { FooterContentStyled } from './FooterContent.styled';
import Logo from 'components/Header/HeaderComponents/Logo/Logo';
import AboutUs from './AboutUs/AboutUs';
import Sellers from './Sellers/Sellers';
import Callback from './Callback/Callback';
import Legal from './Legal/Legal';
import Follow from './Follow/Follow';

const FooterContent = () => {
  return (
    <FooterContentStyled>
      <Logo />
      <AboutUs />
      <Sellers />
      <Callback />
      <Legal />
      <Follow />
    </FooterContentStyled>
  );
};

export default FooterContent;
