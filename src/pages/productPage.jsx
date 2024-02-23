import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import Product from 'components/Product/Product';
import Characteristics from 'components/Characteristics/Characteristics';
import OtherProducts from 'components/OtherProducts/OtherProducts';
import Payment from 'components/Payment/Payment';
import Delivery from 'components/Delivery/Delivery';
// import { useApi } from '../contexts/ApiContext/ApiContext';

const ProductPage = () => {
  // const { query } = useApi();

  //   console.log(query);
  //   query.map(item => console.log(item._id));

  //   useEffect(() => {
  //     fetchData();
  //   }, [selectedCategory, fetchData]);

  return (
    <>
      <Breadcrumbs />
      <Product />
      <Payment />
      <Delivery/>
      <Characteristics />
      <OtherProducts />
    </>
  );
};

export default ProductPage;
