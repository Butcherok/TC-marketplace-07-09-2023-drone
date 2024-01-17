import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NavLink } from 'react-router-dom';

import { useApi } from '../../contexts/ApiContext/ApiContext';

import ProductCard from '../UI/ProductCard/ProductCard';
import {
  DiscountsContainer,
  DiscountsTitle,
  StyledDiscounts,
} from './Discounts.styled';

const Discounts = () => {
  const { query } = useApi();

  const [cardWidth, setCardWidth] = useState(146);

  useEffect(() => {
    const updateCardWidth = () => {
      setCardWidth(window.innerWidth > 1439 ? 206 : 146);
    };

    window.addEventListener('resize', updateCardWidth);

    updateCardWidth();

    return () => {
      window.removeEventListener('resize', updateCardWidth);
    };
  }, []);

  const settings = {
    className: 'slider variable-width',
    infinite: false,
    speed: 500,
    variableWidth: true,
    arrows: false,
  };

  // const cardWidth = 146;
  const cardHeight = 250;

  const groupedQuery = [];
  for (let i = 0; i < query.length; i += 2) {
    groupedQuery.push(query.slice(i, i + 2));
  }

  return (
    <StyledDiscounts className="discounts">
      <DiscountsContainer>
        <DiscountsTitle>Акції</DiscountsTitle>
        <Slider {...settings}>
          {/* {query.map((item, index) => (
            <ProductCard
              key={index}
              title={item.title}
              img={item.img}
              price={item.price}
              _id={item._id}
              width={cardWidth}
              height={cardHeight}
            />
          ))} */}
          {groupedQuery.map((group, index) => (
            <div key={index} className="cards-group">
              <div className="cards-group-head">
                <span className="cards-head-title">Дрони</span>
                <NavLink>Більше &#5171;</NavLink>
              </div>
              <div className="card-group-content">
                {group.map((item, itemIndex) => (
                  <ProductCard
                    className="card1"
                    key={itemIndex}
                    title={item.title}
                    img={item.img}
                    price={item.price}
                    _id={item._id}
                    width={cardWidth}
                    height={cardHeight}
                  />
                ))}
              </div>
            </div>
          ))}
        </Slider>
      </DiscountsContainer>
    </StyledDiscounts>
  );
};

export default Discounts;
