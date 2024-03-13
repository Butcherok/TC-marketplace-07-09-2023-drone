import { Card, CartBtn } from './ProductCard.styled';
import { useApi } from '../../../contexts/ApiContext/ApiContext';
import Heart from '../Icon/Icon';
import Cart from '../Icon/Icon';
// import Drone from './drone.png';
import SetImg from './set.jpg';

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
  const { toggleFavorite } = useApi();

  const handleFavoriteClick = () => {
    toggleFavorite(_id);
  };

  const discountPrice = price - (price / 100) * discount;

  return (
    <Card
      favorite={favorite}
      width={width}
      height={height}
      className={`${className}`}
    >
      <div className="heart-wrapper" onClick={handleFavoriteClick}>
        <Heart id="heart" />
      </div>
      <div className="card-content">
        <img src={SetImg} alt="ddd" />
        <h3>{title}</h3>
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
          <CartBtn>
            <Cart id="shopping-cart" />
          </CartBtn>
        )}
      </div>
    </Card>
  );
};

export default ProductCard;
