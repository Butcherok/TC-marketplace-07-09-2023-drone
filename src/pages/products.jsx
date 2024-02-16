import { useState } from 'react';

import FilterProducts from '../components/FilterProducts/FilterProducts';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import Catalog from '../components/Catalog/Catalog';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = newCategory => {
    setSelectedCategory(newCategory);
  };
  return (
    <>
      <Breadcrumbs />
      <Catalog
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <FilterProducts selectedCategory={selectedCategory} />
    </>
  );
};

export default Products;
