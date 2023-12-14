import React from 'react';

import Hero from 'components/Hero/Hero';
import Catalog from 'components/Catalog/Catalog';
import NewProducts from 'components/NewProducts/NewProducts';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <NewProducts />
    </>
  );
};

export default HomePage;
