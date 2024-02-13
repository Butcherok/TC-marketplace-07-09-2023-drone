// import { useEffect } from 'react';
import { Product } from 'components/Product/Product';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
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
      <Product></Product>
    </>
  );
};

export default ProductPage;
