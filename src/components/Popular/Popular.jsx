import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useApi } from '../../contexts/ApiContext/ApiContext';

import ProductCard from '../UI/ProductCard/ProductCard';
import {
  PopularContainer,
  PopularTitle,
  StyledPopular,
} from './Popular.styled';

const Popular = () => {
  const { query } = useApi();

  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
  };

  return (
    <StyledPopular className='new-products'>
      <PopularContainer>
        <PopularTitle>Найпопулярніші</PopularTitle>
        <Slider {...settings}>
          {query.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              img={item.img}
              price={item.price}
              _id={item._id}
              
            />
          ))}
        </Slider>
      </PopularContainer>
    </StyledPopular>
  );
};

export default Popular;
