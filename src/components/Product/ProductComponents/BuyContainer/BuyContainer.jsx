import {
  FlexWrapper,
  Prices,
  InititalPrice,
  CurrentPrice,
  CountContainer,
  NumberInput,
  Icon,
  ButtonBuy,
  CartIcon,
  FlexContainer,
} from './BuyContainer.styled';
import icon from '../../../../assets/icons/sprite.svg';
import { useState } from 'react';

export const BuyContainer = ({ classNamePrices, classNameWrapper }) => {
  const [orderNumber, setOrderNumber] = useState(1);

  const plusButtonHandler = () => {
    if (orderNumber < 99) {
      setOrderNumber(orderNumber + 1);
    }
  };

  const minusButtonHandler = () => {
    if (orderNumber > 1) {
      setOrderNumber(orderNumber - 1);
    }
  };

  return (
    <FlexWrapper className={classNameWrapper}>
      <FlexContainer className={classNamePrices}>
        <CountContainer>
          <Icon onClick={minusButtonHandler}>-</Icon>
          <NumberInput>{orderNumber}</NumberInput>
          <Icon onClick={plusButtonHandler}>+</Icon>
        </CountContainer>

        <Prices>
          <InititalPrice>25 495 грн.</InititalPrice>
          <CurrentPrice>23 495 грн.</CurrentPrice>
        </Prices>
      </FlexContainer>

      <ButtonBuy>
        У кошик
        <CartIcon>
          <use href={`${icon}#icon-cart`}></use>
        </CartIcon>
      </ButtonBuy>
    </FlexWrapper>
  );
};
