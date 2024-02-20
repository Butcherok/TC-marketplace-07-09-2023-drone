import FilterProducts from '../components/FilterProducts/FilterProducts';
import Breadcrumbs from '../components/UI/Breadcrumbs/Breadcrumbs';
import Catalog from '../components/Catalog/Catalog';
import { useCategory } from 'contexts/CategoryContext/CategoryContext';

const Products = () => {
  const { selectedCategory, handleCategoryChange, currentPage } = useCategory();

  return (
    <>
      <Breadcrumbs currentPage={currentPage} />
      <Catalog
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />
      <FilterProducts selectedCategory={selectedCategory} />
    </>
  );
};

export default Products;
