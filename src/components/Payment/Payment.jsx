// import icon from '../../assets/icons/sprite.svg';
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
            <PaymentIcon>
              {/* <use href={`${icon}#icon-privat`}></use> */}
              <rect width={24} height={24} />
            </PaymentIcon>

            <div>
              <PaymentType>Приват 24</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon>
              {/* <use href={`${icon}#icon-mastercard`}></use> */}
              <rect width={24} height={24} />
            </PaymentIcon>

            <div>
              <PaymentType>Visa</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon>
              {/* <use href={`${icon}#icon-paypal`}></use> */}
              <rect width={24} height={24} />
            </PaymentIcon>

            <div>
              <PaymentType>MasterCard</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon>
              {/* <use href={`${icon}#icon-visa`}></use> */}
              <rect width={24} height={24} />
            </PaymentIcon>

            <div>
              <PaymentType>LiqPay</PaymentType>
              <CommissionText>Комісія 2%</CommissionText>
            </div>
          </FlexContainer>
        </PaymentItem>

        <PaymentItem>
          <FlexContainer>
            <PaymentIcon>
              {/* <use href={`${icon}#icon-liqpay`}></use> */}
              <rect width={24} height={24} />
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
