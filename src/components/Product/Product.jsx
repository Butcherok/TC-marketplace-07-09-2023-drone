import {
  ProductBackground,
  ProductContainer,
  ProductTitle,
  ProductTitle2,
  ProductMainImg,
  ProductImgList,
  ProductImgItem,
  ProductImg,
  BottomContainer,
  FlexContainer,
  FlexContainer2,
  TextContainer,
  ImageContainer,
} from './Product.styled';
import { ResponseContainer } from './ProductComponents/ResponseContainer/ResponseContainer';
import { AddContainer } from './ProductComponents/AddContainer/AddContainer';
import droneImg from '../../assets/drone.jpg';
import { SellerContainer } from './ProductComponents/SellerContainer/SellerContainer';
import { BuyContainer } from './ProductComponents/BuyContainer/BuyContainer';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Product = () => {
  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
    slidesToShow: 5,

    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <>
      <ProductBackground>
        <ProductContainer>
          <ProductTitle>
            Квадрокоптер з камерою RC E88 Pro Black з 4K камерою
          </ProductTitle>
          <ImageContainer>
            <ProductMainImg src={droneImg} alt="Drone"></ProductMainImg>
            <ProductImgList>
              <Slider {...settings} style={{ maxWidth: 436, margin: '0 auto' }}>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
                <ProductImgItem>
                  <ProductImg src={droneImg} alt="Drone" />
                </ProductImgItem>
              </Slider>
            </ProductImgList>
          </ImageContainer>
          <TextContainer>
            <ProductTitle2>
              Квадрокоптер з камерою RC E88 Pro Black з 4K камерою
            </ProductTitle2>

            <BottomContainer>
              <FlexContainer>
                <ResponseContainer />
                <AddContainer />
              </FlexContainer>
              <FlexContainer2>
                <SellerContainer />
                <BuyContainer />
              </FlexContainer2>
            </BottomContainer>
          </TextContainer>
        </ProductContainer>
      </ProductBackground>
    </>
  );
};

export default Product;
