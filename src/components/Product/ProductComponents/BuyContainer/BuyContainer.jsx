import {
  FlexWrapper,
  Prices,
  InititalPrice,
  CurrentPrice,
  CountContainer,
  Icon,
  ButtonBuy,
  CartIcon,
  FlexContainer,
} from './BuyContainer.styled';
import icon from '../../../../assets/icons/sprite.svg';

export const BuyContainer = () => {
  return (
    <FlexWrapper>
      <FlexContainer>
        <CountContainer>
          <Icon>-</Icon>
          <span>1</span>
          <Icon>+</Icon>
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
