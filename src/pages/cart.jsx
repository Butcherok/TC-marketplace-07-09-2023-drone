import CartTitle from 'components/Cart/CartTitle/CartTitle';
import Favorite from 'components/Cart/Favorite/Favorite';
import Orders from 'components/Cart/Orders/Orders';
import Recommendation from 'components/Cart/Recommendation/Recommendation';

const CartPage = () => {
  return (
    <>
      {window.innerWidth < 1280 && (
        <>
          <CartTitle />
          <Orders />
          <Recommendation />
          <Favorite />
        </>
      )}
    </>
  );
};

export default CartPage;
