import {
  DeliveryBackground,
  DeliveryTitle,
  DeliveryList,
  DeliveryItem,
  DeliveryMethod,
  DeliveryDescription,
} from './Delivery.styled';

const Delivery = () => {
  return (
    <DeliveryBackground>
      <DeliveryTitle>Доставка</DeliveryTitle>
      <DeliveryList>
        <DeliveryItem>
          <svg width={32} height={32} style={{ fill: 'paleturquoise' }}>
            <rect width={32} height={32} />
          </svg>
          <div>
            <DeliveryMethod>Самовивіз</DeliveryMethod>
            <DeliveryDescription>Безкоштовно</DeliveryDescription>
          </div>
        </DeliveryItem>

        <DeliveryItem>
          <svg width={32} height={32} style={{ fill: 'paleturquoise' }}>
            <rect width={32} height={32} />
          </svg>
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
          <svg width={32} height={32} style={{ fill: 'paleturquoise' }}>
            <rect width={32} height={32} />
          </svg>
          <div>
            <DeliveryMethod>Нова Пошта</DeliveryMethod>
            <DeliveryDescription>За 60 ₴ у додатку</DeliveryDescription>
            <DeliveryDescription>
              Купуй від 400 ₴ з Пром-оплатою у додатку
            </DeliveryDescription>
          </div>
        </DeliveryItem>

        <DeliveryItem>
          <svg width={32} height={32} style={{ fill: 'paleturquoise' }}>
            <rect width={32} height={32} />
          </svg>
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
