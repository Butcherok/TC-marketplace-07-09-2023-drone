import { useState, useEffect, createContext, useContext } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState('');
  // const [currentProduct, setCurrentProduct] = useState('');

  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    const storedPage = localStorage.getItem('currentPage');
    // const storedProduct = localStorage.getItem('currentProduct');

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }

    if (storedPage) {
      setCurrentPage(storedPage);
    }

    // if (storedProduct) {
    //   setCurrentProduct(storedProduct);
    // }
  }, []);

  const handleCategoryChange = (newCategory, newTitle) => {
    setSelectedCategory(newCategory);
    setCurrentPage(newTitle);
    // setCurrentProduct(newProduct);

    localStorage.setItem('selectedCategory', newCategory);
    localStorage.setItem('currentPage', newTitle);
    // localStorage.setItem('currentProduct', newProduct);
  };

  return (
    <CategoryContext.Provider
      value={{
        selectedCategory,
        handleCategoryChange,
        currentPage,
        // currentProduct,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error('useCategory must be used within a CategoryProvider');
  }
  return context;
};
