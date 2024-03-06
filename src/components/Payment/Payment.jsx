import icon from '../../assets/icons/sprite.svg';
import {
  PaymentBackground,
  PaymentTitle,
  PaymentList,
  PaymentItem,
  FlexContainer,
  PaymentIcon,
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
            <PaymentIcon style={{ width: 44, height: 44, padding: 10 }}>
              <use href={`${icon}#icon-privat`}></use>
            </PaymentIcon>

            <div>
              <PaymentType>Приват 24</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon
              style={{
                fill: '#222357',
                width: 45,
                height: 44,
                padding: '17px 6px',
              }}
            >
              <use href={`${icon}#icon-visa`}></use>
            </PaymentIcon>

            <div>
              <PaymentType>Visa</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon
              style={{ width: 44, height: 44, padding: '12.5px 10px' }}
            >
              <use href={`${icon}#icon-mastercard`}></use>
            </PaymentIcon>

            <div>
              <PaymentType>MasterCard</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon
              style={{ width: 40, height: 44, padding: '18.5px 3px' }}
            >
              <use href={`${icon}#icon-liqpay`}></use>
            </PaymentIcon>

            <div>
              <PaymentType>LiqPay</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon
              style={{ width: 44, height: 44, padding: '10.5px 12px' }}
            >
              <use href={`${icon}#icon-paypal`}></use>
            </PaymentIcon>

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
