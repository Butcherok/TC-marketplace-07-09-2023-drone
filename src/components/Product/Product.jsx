import {
  ProductBackground,
  ProductTitle,
  ProductImg,
  ProductImgList,
  ProductImgItem,
  BottomContainer,
} from './Product.styled';
import { ResponseContainer } from './ProductComponents/ResponseContainer/ResponseContainer';
import { AddContainer } from './ProductComponents/AddContainer/AddContainer';
import droneImg from './drone.jpg';
import { SellerContainer } from './ProductComponents/SellerContainer/SellerContainer';
import { BuyContainer } from './ProductComponents/BuyContainer/BuyContainer';

const Product = () => {
  return (
    <>
      <ProductBackground>
        <ProductTitle>
          Квадрокоптер з камерою RC E88 Pro Black з 4K камерою
        </ProductTitle>
        <ProductImg src={droneImg} alt="Drone"></ProductImg>
        <ProductImgList>
          <ProductImgItem>
            <img src={droneImg} alt="Drone" />
          </ProductImgItem>
          <ProductImgItem>
            <img src={droneImg} alt="Drone" />
          </ProductImgItem>
          <ProductImgItem>
            <img src={droneImg} alt="Drone" />
          </ProductImgItem>
          <ProductImgItem>
            <img src={droneImg} alt="Drone" />
          </ProductImgItem>
          <ProductImgItem>
            <img src={droneImg} alt="Drone" />
          </ProductImgItem>
        </ProductImgList>
        <BottomContainer>
          <ResponseContainer />
          <AddContainer />
          <SellerContainer />
          <BuyContainer />
        </BottomContainer>
      </ProductBackground>
    </>
  );
};

export default Product;
