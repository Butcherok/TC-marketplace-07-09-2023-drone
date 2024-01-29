import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import ProductCard from '../UI/ProductCard/ProductCard';
import { useApi } from '../../contexts/ApiContext/ApiContext';
import {
  StyledFilterProducts,
  FilterProductsContainer,
  HeadFilterProducts,
  ProductsContent,
  FilterProductsContent,
} from './FilterProducts.styled';
import Filter from '../UI/Icon/Icon';
import FilterOptions from './FilterComponents/FilterOptions/FilterOptions';
import SelectedFilters from './FilterComponents/SelectedFilters/SelectedFilters';
import Presentation from './FilterComponents/Presentation/Presentation';

const FilterProducts = ({ selectedCategory }) => {
  const { query, fetchData } = useApi();

  const [selectedItem, setSelectedItem] = useState('Популярні');
  const [selectedFilters, setSelectedFilters] = useState(['Очистити все']);

  const handleSelect = item => {
    setSelectedItem(item);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory, fetchData]);

  return (
    <StyledFilterProducts>
      <FilterProductsContainer>
        <FilterOptions
          setSelectedFilters={setSelectedFilters}
          selectedFilters={selectedFilters}
        />
        <ProductsContent>
          <HeadFilterProducts>
            <div className="product-filter">
              <Filter id="filter" />
              <span>Фільтр</span>
            </div>
            <SelectedFilters
              selectedFilters={selectedFilters}
              setSelectedFilters={setSelectedFilters}
            />
            <Dropdown onSelect={handleSelect}>
              <DropdownButton title={selectedItem} className="dropdown-btn">
                <DropdownItem eventKey="Популярні">Популярні</DropdownItem>
                <DropdownItem eventKey="Новинки">Новинки</DropdownItem>
                <DropdownItem eventKey="Від дешевих">Від дешевих</DropdownItem>
                <DropdownItem eventKey="Від дорогих">Від дорогих</DropdownItem>
              </DropdownButton>
            </Dropdown>
            <Presentation />
          </HeadFilterProducts>
          <FilterProductsContent>
            {query
              .filter(item => item.category === selectedCategory)
              .map((item, index) => (
                <ProductCard
                  key={index}
                  title={item.title}
                  img={item.img}
                  price={item.price}
                  _id={item._id}
                  width="100%"
                  height="280px"
                  showButton={true}
                  sale={item.sale}
                  discount={item.discount}
                  category={item.category}
                />
              ))}
          </FilterProductsContent>
        </ProductsContent>
      </FilterProductsContainer>
    </StyledFilterProducts>
  );
};

export default FilterProducts;
