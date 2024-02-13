import {
  FlexWrapper,
  SellerImg,
  SellerTitle,
  SellerResponse,
} from './SellerContainer.styled';
import sellerImg from '../../seller.jpg';

export const SellerContainer = () => {
  return (
    <FlexWrapper>
      <SellerImg src={sellerImg} alt="Drone"></SellerImg>
      <SellerTitle>Продавець BuyQuadro</SellerTitle>
      <SellerResponse>100% позитивних відгуків</SellerResponse>
    </FlexWrapper>
  );
};
