import { useState, useEffect, createContext, useContext } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    const storedCategory = localStorage.getItem('selectedCategory');
    const storedPage = localStorage.getItem('currentPage');

    if (storedCategory) {
      setSelectedCategory(storedCategory);
    }

    if (storedPage) {
      setCurrentPage(storedPage);
    }
  }, []);

  const handleCategoryChange = (newCategory, newTitle) => {
    setSelectedCategory(newCategory);
    setCurrentPage(newTitle);

    localStorage.setItem('selectedCategory', newCategory);
    localStorage.setItem('currentPage', newTitle);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, handleCategoryChange, currentPage }}
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
