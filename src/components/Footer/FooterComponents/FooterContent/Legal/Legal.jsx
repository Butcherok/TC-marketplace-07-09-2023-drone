import React from 'react';
import { LegalContainer } from './Legal.styled';
import {
  AboutItem,
  AboutList,
  AboutTitle,
  Link,
} from '../AboutUs/AboutUs.styled';

const Legal = () => {
  return (
    <LegalContainer>
      <AboutTitle>Юридична інформація</AboutTitle>
      <AboutList>
        <AboutItem>
          <Link to={'/legal'}>Політика конфіденційності</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/offer'}>Оферта</Link>
        </AboutItem>
      </AboutList>
    </LegalContainer>
  );
};

export default Legal;
