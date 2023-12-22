import React from 'react';

import Hero from 'components/Hero/Hero';
import Catalog from 'components/Catalog/Catalog';
import NewProducts from 'components/NewProducts/NewProducts';
import Popular from 'components/Popular/Popular';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Catalog />
      <NewProducts />
      <Popular />
    </>
  );
};

export default HomePage;
