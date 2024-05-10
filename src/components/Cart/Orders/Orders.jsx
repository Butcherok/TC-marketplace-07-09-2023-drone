import set from '../../../assets/set.jpg';
import icon from '../../../assets/icons/sprite.svg';
import {
  CountContainer,
  Icon,
  IconCross,
  OrderItemContainer,
  OrderImg,
  OrderNumTitle,
  OrderTitle,
  TopContainer,
  OrderContainer,
  CrossBtn,
  CurrentPrice,
  OldPrice,
  BottomContainer,
  ProductList,
  IconCart,
  BuyBtn,
  ContinueBuyBtn,
  CheckoutPriceContainer,
  CheckoutTitle,
} from './Orders.styled';

const Orders = () => {
  return (
    <ul>
      <OrderItemContainer>
        <ProductList>
          <OrderNumTitle>Замовлення № 1</OrderNumTitle>
          <li>
            <OrderContainer>
              <TopContainer>
                <OrderImg src={set} alt="drone" />
                <OrderTitle>
                  Квадрокоптер з камерою RC E88 Pro Black с 4K й HD
                </OrderTitle>
                <CrossBtn type="button">
                  <IconCross>
                    <use href={`${icon}#icon-cross`}></use>
                  </IconCross>
                </CrossBtn>
              </TopContainer>

              <BottomContainer>
                <CountContainer>
                  <Icon>-</Icon>
                  <span>1</span>
                  <Icon>+</Icon>
                </CountContainer>

                <div>
                  <OldPrice>25 495 грн.</OldPrice>
                  <CurrentPrice>23 495 грн.</CurrentPrice>
                </div>
              </BottomContainer>
            </OrderContainer>
          </li>

          <li>
            <OrderContainer>
              <TopContainer>
                <OrderImg src={set} alt="drone" />
                <OrderTitle>
                  Квадрокоптер з камерою RC E88 Pro Black с 4K й HD
                </OrderTitle>
                <CrossBtn type="button">
                  <IconCross>
                    <use href={`${icon}#icon-cross`}></use>
                  </IconCross>
                </CrossBtn>
              </TopContainer>

              <BottomContainer>
                <CountContainer>
                  <Icon>-</Icon>
                  <span>1</span>
                  <Icon>+</Icon>
                </CountContainer>

                <div>
                  <OldPrice>25 495 грн.</OldPrice>
                  <CurrentPrice>23 495 грн.</CurrentPrice>
                </div>
              </BottomContainer>
            </OrderContainer>
          </li>
        </ProductList>

        <CheckoutPriceContainer>
          <CheckoutTitle>До сплати без доставки</CheckoutTitle>
          <OldPrice>25 495 грн.</OldPrice>
          <CurrentPrice>23 495 грн.</CurrentPrice>
        </CheckoutPriceContainer>
        <BuyBtn type="button">
          Оформити замовлення
          <IconCart>
            <use href={`${icon}#icon-cart`}></use>
          </IconCart>
        </BuyBtn>
        <ContinueBuyBtn type="button">Продовжити покупки</ContinueBuyBtn>
      </OrderItemContainer>

      <OrderItemContainer>
        <ul>
          <li>
            <OrderNumTitle>Замовлення № 1</OrderNumTitle>

            <OrderContainer>
              <TopContainer>
                <OrderImg src={set} alt="drone" />
                <OrderTitle>
                  Квадрокоптер з камерою RC E88 Pro Black с 4K й HD
                </OrderTitle>
                <CrossBtn type="button">
                  <IconCross>
                    <use href={`${icon}#icon-cross`}></use>
                  </IconCross>
                </CrossBtn>
              </TopContainer>

              <BottomContainer>
                <CountContainer>
                  <Icon>-</Icon>
                  <span>1</span>
                  <Icon>+</Icon>
                </CountContainer>

                <div>
                  <OldPrice>25 495 грн.</OldPrice>
                  <CurrentPrice>23 495 грн.</CurrentPrice>
                </div>
              </BottomContainer>
            </OrderContainer>
          </li>
        </ul>
      </OrderItemContainer>
    </ul>
  );
};

export default Orders;
