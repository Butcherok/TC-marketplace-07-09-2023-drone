import { Card } from './ProductCard.styled';
import { useApi } from '../../../contexts/ApiContext/ApiContext';
import Heart from '../Icon/Icon';
import Drone from './drone.png';

const ProductCard = ({ width, height, title, price, img, _id, favorite }) => {
  const { toggleFavorite } = useApi();

  const handleFavoriteClick = () => {
    toggleFavorite(_id);
  };
  
  return (
    <Card favorite={favorite} width={width} height={height}> 
      <div className="heart-wrapper" onClick={handleFavoriteClick}>
        <Heart id='heart' />
      </div>
      <div className="card-content">
        <img src={Drone} alt="ddd" />
        <h3>{title}</h3>
        <p>{price} грн.</p>
      </div>
    </Card>
  );
};

export default ProductCard;
