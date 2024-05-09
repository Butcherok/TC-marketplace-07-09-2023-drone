import { Card, CartBtn } from './ProductCard.styled';
// import { useApi } from '../../../contexts/ApiContext/ApiContext';
import Heart from '../Icon/Icon';
import Cart from '../Icon/Icon';
// import Drone from './drone.png';
import SetImg from './set.jpg';
import { useEffect, useState } from 'react';

const ProductCard = ({
  width,
  height,
  title,
  price,
  img,
  _id,
  favorite,
  className,
  showButton,
  sale,
  discount,
}) => {
  // const { toggleFavorite } = useApi();
  const [shortTitle, setShortTitle] = useState('');

  useEffect(() => {
    if (title.length >= 37) {
      const titleLetters = title.length - 34;
      const titleArr = [];

      titleArr.push(...title);
      titleArr.splice(34, titleLetters, '...');

      const cutTitle = titleArr.join('');

      setShortTitle(cutTitle);
    }
  }, [title]);

  const handleFavoriteClick = e => {
    e.stopPropagation();

    e.preventDefault();

    console.log('Add To Favorite');
    // toggleFavorite(_id);
  };

  const addToCart = e => {
    e.stopPropagation();

    e.preventDefault();

    console.log('Add To Cart');
    // toggleFavorite(_id);
  };

  const discountPrice = price - (price / 100) * discount;

  return (
    <Card
      favorite={favorite}
      width={width}
      height={height}
      className={`${className}`}
    >
      <button
        type="button"
        className="heart-wrapper"
        onClick={handleFavoriteClick}
      >
        <Heart id="heart" />
      </button>
      <div className="card-content">
        <img src={SetImg} alt="ddd" />
        {title.length >= 37 ? (
          <h3 className="card-title">{shortTitle}</h3>
        ) : (
          <h3 className="card-title">{title}</h3>
        )}

        <div className="buy-container">
          <p className={sale ? 'sale-price' : ''}>
            {sale ? (
              <>
                <span className="old-price">{price} грн.</span>
                <span className="discounted-price">{discountPrice} грн.</span>
              </>
            ) : (
              <span className="price">{price} грн.</span>
            )}
          </p>
          {showButton && (
            <CartBtn type="button" onClick={addToCart}>
              <Cart id="shopping-cart" />
            </CartBtn>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;
