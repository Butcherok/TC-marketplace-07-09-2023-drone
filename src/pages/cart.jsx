import CartTitle from 'components/Cart/CartTitle/CartTitle';
import Favorite from 'components/Cart/Favorite/Favorite';
import Orders from 'components/Cart/Orders/Orders';
import Recommendation from 'components/Cart/Recommendation/Recommendation';
// import ReactModal from 'react-modal';

const CartPage = () => {
  return (
    <>
      {/* {window.innerWidth < 1280 && ( */}
      {/* <ReactModal isOpen={true}> */}
      <CartTitle />
      <Orders />
      <Recommendation />
      <Favorite />
      {/* </ReactModal> */}
      {/* )} */}
    </>
  );
};

export default CartPage;
