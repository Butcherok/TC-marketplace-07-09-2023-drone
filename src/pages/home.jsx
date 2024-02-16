import React from 'react';

import Hero from 'components/Hero/Hero';
import Catalog from 'components/Catalog/Catalog';
import NewProducts from 'components/NewProducts/NewProducts';
import Popular from 'components/Popular/Popular';
import Discounts from 'components/Discounts/Discounts';
import { useCategory } from 'contexts/CategoryContext/CategoryContext';

const HomePage = () => {
  // const [selectedCategory, setSelectedCategory] = useState('');
  const { selectedCategory, handleCategoryChange } = useCategory();
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
