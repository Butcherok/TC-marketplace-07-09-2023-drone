import React from 'react';
import {
  AboutContainer,
  AboutItem,
  AboutList,
  AboutTitle,
  Link,
} from './AboutUs.styled';

const AboutUs = () => {
  return (
    <AboutContainer>
      <AboutTitle>Інформація</AboutTitle>
      <AboutList>
        <AboutItem>
          <Link to={'/about-us'}>Про нас</Link>
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
