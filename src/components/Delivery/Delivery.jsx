import {
  DeliveryBackground,
  DeliveryTitle,
  DeliveryList,
  DeliveryItem,
  DeliveryIcon,
  DeliveryMethod,
  DeliveryDescription,
} from './Delivery.styled';
import icon from '../../assets/icons/sprite.svg';

const Delivery = () => {
  return (
    <DeliveryBackground>
      <DeliveryTitle>Доставка</DeliveryTitle>
      <DeliveryList>
        <DeliveryItem>
          <DeliveryIcon>
            <use href={`${icon}#icon-package`}></use>
          </DeliveryIcon>
          <div>
            <DeliveryMethod>Самовивіз</DeliveryMethod>
            <DeliveryDescription>Безкоштовно</DeliveryDescription>
          </div>
        </DeliveryItem>

        <DeliveryItem>
          <DeliveryIcon>
            <use href={`${icon}#icon-rozetka`}></use>
          </DeliveryIcon>
          <div>
            <DeliveryMethod>Rozetka</DeliveryMethod>
            <DeliveryDescription>Безкоштовно</DeliveryDescription>
            <DeliveryDescription>
              На замовлення до 15 кг і 120 см
            </DeliveryDescription>
            <DeliveryDescription>Доставка 3-5 днів</DeliveryDescription>
          </div>
        </DeliveryItem>

        <DeliveryItem>
          <DeliveryIcon>
            <use href={`${icon}#icon-nova-poshta`}></use>
          </DeliveryIcon>
          <div>
            <DeliveryMethod>Нова Пошта</DeliveryMethod>
            <DeliveryDescription>За 60 ₴ у додатку</DeliveryDescription>
            <DeliveryDescription>
              Купуй від 400 ₴ з Пром-оплатою у додатку
            </DeliveryDescription>
          </div>
        </DeliveryItem>

        <DeliveryItem>
          <DeliveryIcon style={{ borderRadius: '50%' }}>
            <use href={`${icon}#icon-ukr-poshta`}></use>
          </DeliveryIcon>
          <div>
            <DeliveryMethod>Укрпошта</DeliveryMethod>
            <DeliveryDescription>За 60 ₴ у додатку</DeliveryDescription>
            <DeliveryDescription>
              Купуй від 400 ₴ з Пром-оплатою у додатку
            </DeliveryDescription>
          </div>
        </DeliveryItem>
      </DeliveryList>
    </DeliveryBackground>
  );
};

export default Delivery;
