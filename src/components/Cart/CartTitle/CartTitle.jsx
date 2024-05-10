import icon from '../../../assets/icons/sprite.svg';
import { CartTitleContainer, Title, ReturnIcon } from './CartTitle.styled';

const CartTitle = () => {
  return (
    <>
      <CartTitleContainer>
        <Title>Корзина</Title>

        <button type="button">
          <ReturnIcon>
            <use href={`${icon}#icon-arrow-left`}></use>
          </ReturnIcon>
        </button>
      </CartTitleContainer>
    </>
  );
};

export default CartTitle;
