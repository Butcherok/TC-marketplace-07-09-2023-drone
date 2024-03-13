import {
  Card,
  CardPhotos,
  CardText,
  CardPrice,
  CartBtn,
} from './ProductCardList.styled';
import { useApi } from '../../../contexts/ApiContext/ApiContext';
// import Drone from './drone.png';
import SetImg from './set.jpg';
import Heart from '../Icon/Icon';
import Cart from '../Icon/Icon';
import CheckMark from '../Icon/Icon';
import Star from '../Icon/Icon';

const ProductCardList = ({
  _id,
  sale,
  price,
  discount,
  title,
  properties,
  stock,
}) => {
  const { toggleFavorite } = useApi();

  const discountPrice = price - (price / 100) * discount;

  const handleFavoriteClick = () => {
    toggleFavorite(_id);
  };
  return (
    <Card>
      <CardPhotos>
        {/* <div className="heart-wrapper" onClick={handleFavoriteClick}> */}
        <Heart className="heart" id="heart" onClick={handleFavoriteClick} />
        {/* </div> */}
        <div className="photos">
          <div className="main-photo">
            <img src={SetImg} alt="Drone" />
          </div>
          <div className="small-photos">
            <img src={SetImg} alt="Drone" />
            <img src={SetImg} alt="Drone" />
          </div>
        </div>
        <CardPrice className="price-photos">
          <p className="sale-price">
            {sale ? (
              <>
                <span className="old-price">{price} грн.</span>
                <span className="discounted-price">{discountPrice} грн.</span>
              </>
            ) : (
              <span className="current-price">{price} грн.</span>
            )}
          </p>
          <CartBtn>
            <span>У кошик</span>
            <Cart id="shopping-cart" />
          </CartBtn>
        </CardPrice>
      </CardPhotos>
      <CardText>
        <h3>{title}</h3>
        <div className="rating-block">
          <p className="in-stock">
            <CheckMark id="check-mark" />{' '}
            {stock ? 'в наявності' : 'немає в наявності'}
          </p>
          <div className="rating">
            <div className="stars">
              <Star id="star" />
              <Star id="star" />
              <Star id="star" />
              <Star id="star" />
              <Star id="star" />
            </div>
            <span>12 відгуків</span>
          </div>
        </div>
        <div className="characteristics">
          <div className="left-block">
            <div className="row-characteristic">
              <div className="characteristic-key">Розгорнуті розміри</div>
              <div className="characteristic-value">
                {properties.length}x{properties.width}x{properties.height}
              </div>
            </div>
            <div className="row-characteristic">
              <div className="characteristic-key">Наявність камери</div>
              <div className="characteristic-value">
                {properties.camera ? 'Так' : 'Ні'}
              </div>
            </div>
            <div className="row-characteristic">
              <div className="characteristic-key">Пульт управління</div>
              <div className="characteristic-value">2,4 Ггц</div>
            </div>
          </div>
          <div className="right-block">
            <div className="row-characteristic">
              <div className="characteristic-key">Час зарядки</div>
              <div className="characteristic-value">
                {properties.charging} хвилин
              </div>
            </div>
            <div className="row-characteristic">
              <div className="characteristic-key">Автопілот</div>
              <div className="characteristic-value">
                {properties.autopilot ? 'Так' : 'Ні'}
              </div>
            </div>
            <div className="row-characteristic">
              <div className="characteristic-key">Вага</div>
              <div className="characteristic-value">{properties.weight} г</div>
            </div>
          </div>
        </div>
        <CardPrice className="price-values">
          <p className="sale-price">
            {sale ? (
              <>
                <span className="old-price">{price} грн.</span>
                <span className="discounted-price">{discountPrice} грн.</span>
              </>
            ) : (
              <span className="current-price">{price} грн.</span>
            )}
          </p>
          <CartBtn>
            <span>У кошик</span>
            <Cart id="shopping-cart" />
          </CartBtn>
        </CardPrice>
      </CardText>
    </Card>
  );
};

export default ProductCardList;
