import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useApi } from '../../contexts/ApiContext/ApiContext';

import ProductCard from '../UI/ProductCard/ProductCard';
import {
  ConsideredContainer,
  Title,
  OtherProductsSection,
  SellerProductsContainer,
} from './OtherProducts.styled';
import { Link } from 'react-router-dom';

const OtherProducts = () => {
  const { query } = useApi();

  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
  };

  const cardWidth = '196px';
  const cardHeight = '248px';

  return (
    <OtherProductsSection>
      <ConsideredContainer>
        <Title>Разом з цим купують</Title>
        <Slider {...settings}>
          {query.map((item, index) => (
            <Link to={`drones/${item._id}`} key={index}>
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                _id={item._id}
                width={cardWidth}
                height={cardHeight}
                showButton={true}
              />
            </Link>
          ))}
        </Slider>
      </ConsideredContainer>

      <SellerProductsContainer>
        <Title>Інші товари від цього продавця</Title>
        <Slider {...settings}>
          {query.map((item, index) => (
            <Link to={`drones/${item._id}`} key={index}>
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                _id={item._id}
                width={cardWidth}
                height={cardHeight}
                showButton={true}
              />
            </Link>
          ))}
        </Slider>
      </SellerProductsContainer>
    </OtherProductsSection>
  );
};

export default OtherProducts;
