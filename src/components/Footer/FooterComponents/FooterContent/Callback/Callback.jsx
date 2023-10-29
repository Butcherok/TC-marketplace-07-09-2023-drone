import React from 'react';
import { CallbackContainer } from './Callback.styled';
import {
  AboutItem,
  AboutList,
  AboutTitle,
  Link,
} from '../AboutUs/AboutUs.styled';

const Callback = () => {
  return (
    <CallbackContainer>
      <AboutTitle>Зворотній зв'язок</AboutTitle>
      <AboutList>
        <AboutItem>
          <Link to={'/faq'}>Найчастіші запитання</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/support'}>Підтримка</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/contact-us'}>Зв'язатися з нами</Link>
        </AboutItem>
      </AboutList>
    </CallbackContainer>
  );
};

export default Callback;
