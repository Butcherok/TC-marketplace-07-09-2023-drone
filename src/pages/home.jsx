import React, { useState } from 'react';

import Hero from 'components/Hero/Hero';
import Catalog from 'components/Catalog/Catalog';
import NewProducts from 'components/NewProducts/NewProducts';
import Popular from 'components/Popular/Popular';
import Discounts from 'components/Discounts/Discounts';

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = newCategory => {
    setSelectedCategory(newCategory);
  };
  return (
    <>
      <Hero />
      <Catalog
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <Discounts />
      <NewProducts />
      <Popular />
    </>
  );
};

export default HomePage;
