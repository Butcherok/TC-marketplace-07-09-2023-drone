import { useState } from 'react';

import FilterProducts from '../components/FilterProducts/FilterProducts';
import CatalogProducts from '../components/CatalogProducts/CatalogProducts';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('drone');

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };
  return (
    <>
      <Breadcrumbs />
      <CatalogProducts selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      <FilterProducts selectedCategory={selectedCategory} />
    </>
  );
};

export default Products;
