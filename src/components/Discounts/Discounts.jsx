import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useApi } from '../../contexts/ApiContext/ApiContext';

import ProductCard from '../UI/ProductCard/ProductCard';
import {
  DiscountsContainer,
  DiscountsTitle,
  StyledDiscounts,
} from './Discounts.styled';

const Discounts = () => {
  const { query } = useApi();

  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
  };

  const cardWidth = 196;
  const cardHeight = 248;

  return (
    <StyledDiscounts className='new-products'>
      <DiscountsContainer>
        <DiscountsTitle>Акції</DiscountsTitle>
        <Slider {...settings}>
          {query.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              img={item.img}
              price={item.price}
              _id={item._id}
              width={cardWidth}
              height={cardHeight}
            />
          ))}
        </Slider>
      </DiscountsContainer>
    </StyledDiscounts>
  );
};

export default Discounts;
