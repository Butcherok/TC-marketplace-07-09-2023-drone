import { useState, createContext, useContext } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategoryChange = (newCategory) => {
    setSelectedCategory(newCategory);
  };

  return (
    <CategoryContext.Provider
      value={{ selectedCategory, handleCategoryChange }}
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