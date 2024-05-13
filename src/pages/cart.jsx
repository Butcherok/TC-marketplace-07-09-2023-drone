import CartTitle from 'components/Cart/CartTitle/CartTitle';
import Favorite from 'components/Cart/Favorite/Favorite';
import Orders from 'components/Cart/Orders/Orders';
import Recommendation from 'components/Cart/Recommendation/Recommendation';

const CartPage = () => {
  return (
    <>
      <CartTitle></CartTitle>
      <Orders></Orders>
      <Recommendation></Recommendation>
      <Favorite></Favorite>
    </>
  );
};

export default CartPage;
