// import icon from '../../assets/icons/sprite.svg';
import {
  PaymentBackground,
  PaymentTitle,
  PaymentList,
  PaymentItem,
  CommissionText,
  PaymentText,
} from './Payment.styled';

const Payment = () => {
  return (
    <PaymentBackground>
      <PaymentTitle>Оплата</PaymentTitle>
      <PaymentList>
        <PaymentItem>
          <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
            {/* <use href={`${icon}#icon-privat`}></use> */}
            <rect width={24} height={24} />
          </svg>
          <CommissionText>Комісія 2%</CommissionText>
          <p></p>
        </PaymentItem>
        <PaymentItem>
          <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
            {/* <use href={`${icon}#icon-mastercard`}></use> */}
            <rect width={24} height={24} />
          </svg>
          <CommissionText>Комісія 2%</CommissionText>
        </PaymentItem>
        <PaymentItem>
          <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
            {/* <use href={`${icon}#icon-paypal`}></use> */}
            <rect width={24} height={24} />
          </svg>
          <CommissionText>Комісія 2%</CommissionText>
        </PaymentItem>
        <PaymentItem>
          <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
            {/* <use href={`${icon}#icon-visa`}></use> */}
            <rect width={24} height={24} />
          </svg>
          <CommissionText>Комісія 2%</CommissionText>
        </PaymentItem>
        <PaymentItem>
          <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
            {/* <use href={`${icon}#icon-liqpay`}></use> */}
            <rect width={24} height={24} />
          </svg>
          <CommissionText>Комісія 2%</CommissionText>
        </PaymentItem>
      </PaymentList>

      <PaymentText>Оплата за реквізитами</PaymentText>
      <PaymentText>Післяплата "Нова Пошта"</PaymentText>
    </PaymentBackground>
  );
};

export default Payment;
