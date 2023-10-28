import React from 'react';
import { AboutContainer, AboutItem, AboutList } from './AboutUs.styled';

const AboutUs = () => {
  return (
    <AboutContainer>
      <h4>Інформація</h4>
      <AboutList>
        <AboutItem>Про нас</AboutItem>
        <AboutItem>Доставка і оплата</AboutItem>
        <AboutItem>Повернення та обмін</AboutItem>
        <AboutItem>Контакти</AboutItem>
        <AboutItem>Статті</AboutItem>
      </AboutList>
    </AboutContainer>
  );
};

export default AboutUs;
