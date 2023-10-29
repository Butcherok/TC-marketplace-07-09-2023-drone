import React from 'react';
import { AboutContainer, AboutItem, AboutList, Link } from './AboutUs.styled';

const AboutUs = () => {
  return (
    <AboutContainer>
      <h4>Інформація</h4>
      <AboutList>
        <AboutItem>
          <Link to={'/about'}>Про нас</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/delivery'}>Доставка і оплата</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/returns'}>Повернення та обмін</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/contacts'}>Контакти</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/articles'}>Статті</Link>
        </AboutItem>
      </AboutList>
    </AboutContainer>
  );
};

export default AboutUs;
