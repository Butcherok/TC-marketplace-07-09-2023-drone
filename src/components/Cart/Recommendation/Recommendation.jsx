import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { useApi } from '../../../contexts/ApiContext/ApiContext';

import ProductCard from '../../UI/ProductCard/ProductCard';
import {
  ConsideredContainer,
  Title,
  RecommendationSection,
} from './Recommendation.styled';
import { Link } from 'react-router-dom';

const Recommendation = () => {
  const { query } = useApi();

  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,

    slidesToShow: 6,

    responsive: [
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 5,
        },
      },
    ],
  };

  const cardWidth = '196px';
  const cardHeight = '344px';

  return (
    <RecommendationSection>
      <ConsideredContainer>
        <Title>Рекомендуємо</Title>
        <Slider {...settings}>
          {query.map((item, index) => (
            <Link to={`/drones/${item._id}`} key={index}>
              <ProductCard
                key={index}
                title={item.title}
                img={item.img}
                price={item.price}
                _id={item._id}
                width={cardWidth}
                height={cardHeight}
                showButton={true}
                className="product-card"
              />
            </Link>
          ))}
        </Slider>
      </ConsideredContainer>
    </RecommendationSection>
  );
};

export default Recommendation;
