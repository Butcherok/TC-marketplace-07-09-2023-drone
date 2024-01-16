import React from 'react';

import Hero from 'components/Hero/Hero';
import Catalog from 'components/Catalog/Catalog';
import NewProducts from 'components/NewProducts/NewProducts';
import Popular from 'components/Popular/Popular';
import Discounts from 'components/Discounts/Discounts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <Discounts />
      <NewProducts />
      <Popular />
    </>
  );
};

export default HomePage;
