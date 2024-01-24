import React, { useState, useEffect } from 'react';
import { Dropdown, DropdownButton, DropdownItem } from 'react-bootstrap';
import ProductCard from '../UI/ProductCard/ProductCard';
import { useApi } from '../../contexts/ApiContext/ApiContext';
import {
  StyledFilterProducts,
  FilterProductsContainer,
  HeadFilterProducts,
} from './FilterProducts.styled';
import Filter from '../UI/Icon/Icon';

const FilterProducts = ({ selectedCategory }) => {
  const { query, fetchData } = useApi();

  const [selectedItem, setSelectedItem] = useState('Популярні');

  const handleSelect = item => {
    setSelectedItem(item);
  };

  useEffect(() => {
    fetchData();
  }, [selectedCategory, fetchData]);

  return (
    <StyledFilterProducts>
      <FilterProductsContainer>
        <HeadFilterProducts>
          <div className="product-filter">
            <Filter id="filter" />
            <span>Фільтр</span>
          </div>

          <Dropdown onSelect={handleSelect}>
            <DropdownButton title={selectedItem} className="dropdown-btn">
              <DropdownItem eventKey="Популярні">Популярні</DropdownItem>
              <DropdownItem eventKey="Новинки">Новинки</DropdownItem>
              <DropdownItem eventKey="Від дешевих">Від дешевих</DropdownItem>
              <DropdownItem eventKey="Від дорогих">Від дорогих</DropdownItem>
            </DropdownButton>
          </Dropdown>
        </HeadFilterProducts>
        <div>
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
        </div>
      </FilterProductsContainer>
    </StyledFilterProducts>
  );
};

export default FilterProducts;
