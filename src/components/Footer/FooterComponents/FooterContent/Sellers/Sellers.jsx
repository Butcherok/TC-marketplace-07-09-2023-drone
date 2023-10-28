import React from 'react';
import { SellersContainer } from './Sellers.styled';

const Sellers = () => {
  return (
    <SellersContainer>
      <h4>Продавцям</h4>
      <ul>
        <li>Довідка про продавців</li>
        <li>Тарифи</li>
        <li>Як почати продавати?</li>
        <li>Угода користувача</li>
        <li>
          <button>Стати продавцем</button>
        </li>
      </ul>
    </SellersContainer>
  );
};

export default Sellers;
