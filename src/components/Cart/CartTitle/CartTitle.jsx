import icon from '../../../assets/icons/sprite.svg';
import { CartTitleContainer, Title, ReturnIcon } from './CartTitle.styled';

const CartTitle = () => {
  return (
    <>
      <CartTitleContainer>
        <Title>Корзина</Title>

        <button type="button">
          {window.innerWidth >= 1280 ? (
            <ReturnIcon>
              <use href={`${icon}#icon-cross`}></use>
            </ReturnIcon>
          ) : (
            <ReturnIcon>
              <use href={`${icon}#icon-arrow-left`}></use>
            </ReturnIcon>
          )}
        </button>
      </CartTitleContainer>
    </>
  );
};

export default CartTitle;
