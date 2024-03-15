import {
  FlexWrapper,
  SellerImg,
  SellerTitle,
  SellerResponse,
} from './SellerContainer.styled';
import sellerImg from '../../../../assets/seller.jpg';

export const SellerContainer = ({ className}) => {
  return (
    <FlexWrapper className={className}>
      <SellerImg src={sellerImg} alt="Drone"></SellerImg>
      <div>
        <SellerTitle>Продавець BuyQuadro</SellerTitle>
        <SellerResponse>100% позитивних відгуків</SellerResponse>
      </div>
    </FlexWrapper>
  );
};
