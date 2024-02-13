import { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link, NavLink } from 'react-router-dom';

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
      setCardWidth(window.innerWidth > 1439 ? '206px' : '146px');
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
  const cardHeight = '250px';

  const groupedQuery = [];
  for (let i = 0; i < query.length; i += 2) {
    groupedQuery.push(query.slice(i, i + 2));
  }

  return (
    <StyledDiscounts className="discounts">
      <DiscountsContainer>
        <DiscountsTitle>Акції</DiscountsTitle>
        <Slider {...settings}>
          {groupedQuery.map((group, index) => {
            const hasSaleItems = group.some(item => item.sale === true);
            if (hasSaleItems) {
              return (
                <div key={index} className="cards-group">
                  <div className="cards-group-head">
                    <span className="cards-head-title">Дрони</span>
                    <NavLink>Більше &#5171;</NavLink>
                  </div>
                  <div className="card-group-content">
                    {group
                      .filter(item => item.sale === true)
                      .map((item, itemIndex) => (
                        <Link to={`drons/${item._id}`} key={itemIndex}>
                          <ProductCard
                            className="card-item"
                            key={itemIndex}
                            title={item.title}
                            img={item.img}
                            price={item.price}
                            _id={item._id}
                            width={cardWidth}
                            height={cardHeight}
                            showButton={false}
                            sale={item.sale}
                            discount={item.discount}
                          />
                        </Link>
                      ))}
                  </div>
                </div>
              );
            }
            return null;
          })}
        </Slider>
      </DiscountsContainer>
    </StyledDiscounts>
  );
};

export default Discounts;
