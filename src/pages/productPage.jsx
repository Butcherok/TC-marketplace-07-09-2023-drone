import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import Product from 'components/Product/Product';
import Characteristics from 'components/Characteristics/Characteristics';
import OtherProducts from 'components/OtherProducts/OtherProducts';
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
      <Characteristics />
      <OtherProducts />
    </>
  );
};

export default ProductPage;
