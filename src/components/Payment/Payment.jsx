// import icon from '../../assets/icons/sprite.svg';
import {
  PaymentBackground,
  PaymentTitle,
  PaymentList,
  PaymentItem,
  FlexContainer,
  PaymentType,
  CommissionText,
  PaymentText,
} from './Payment.styled';

const Payment = () => {
  return (
    <PaymentBackground>
      <PaymentTitle>Оплата</PaymentTitle>
      <PaymentList>
        <PaymentItem>
          <FlexContainer>
            <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
              {/* <use href={`${icon}#icon-privat`}></use> */}
              <rect width={24} height={24} />
            </svg>

            <div>
              <PaymentType>Приват 24</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
              {/* <use href={`${icon}#icon-mastercard`}></use> */}
              <rect width={24} height={24} />
            </svg>

            <div>
              <PaymentType>Visa</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
              {/* <use href={`${icon}#icon-paypal`}></use> */}
              <rect width={24} height={24} />
            </svg>

            <div>
              <PaymentType>MasterCard</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
              {/* <use href={`${icon}#icon-visa`}></use> */}
              <rect width={24} height={24} />
            </svg>

            <div>
              <PaymentType>LiqPay</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <svg width={24} height={24} style={{ fill: 'palevioletred' }}>
              {/* <use href={`${icon}#icon-liqpay`}></use> */}
              <rect width={24} height={24} />
            </svg>

            <div>
              <PaymentType>PayPal</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>
      </PaymentList>

      <PaymentText>Оплата за реквізитами</PaymentText>
      <PaymentText>Післяплата "Нова Пошта"</PaymentText>
    </PaymentBackground>
  );
};

export default Payment;
