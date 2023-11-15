import React from 'react';
import { Btn } from '../FooterContent.styled';
import { SellersContainer } from './Sellers.styled';
import {
  AboutItem,
  AboutList,
  AboutTitle,
  Link,
} from '../AboutUs/AboutUs.styled';

const Sellers = () => {
  return (
    <SellersContainer>
      <AboutTitle>Продавцям</AboutTitle>
      <AboutList>
        <AboutItem>
          <Link to={'/sellers'}>Довідка про продавців</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/tariffs'}>Тарифи</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/how-to-start'}>Як почати продавати?</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/agreement'}>Угода користувача</Link>
        </AboutItem>
        <AboutItem>
          <Link to={'/begin'}>
            <Btn variant="primary">Стати продавцем</Btn>
          </Link>
        </AboutItem>
      </AboutList>
    </SellersContainer>
  );
};

export default Sellers;
