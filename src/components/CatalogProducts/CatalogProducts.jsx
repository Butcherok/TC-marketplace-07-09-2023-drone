// import { useState, useEffect } from 'react';
import { Image } from 'react-bootstrap';

import { MenuItem, MenuContainer, Menu, Link } from './CatalogProducts.styled';

import Drones from './MenuImg/drones.webp';
import Accessories from './MenuImg/accessories.webp';
import Parts from './MenuImg/parts.webp';
import Sets from './MenuImg/sets.webp';

const CatalogProducts = ({ onCategoryChange }) => {
  // const [selectedCategory, setSelectedCategory] = useState('Дрони');

  const onChangeCategory = (e, category) => {
    e.preventDefault();
    console.log(category);
    onCategoryChange(category);
  };

  const items = [
    {
      title: 'Дрони',
      img: Drones,
      link: '/drones',
      category: 'drones',
    },
    {
      title: 'Аксесуари',
      img: Accessories,
      link: '/accessories',
      category: 'accessories',
    },
    {
      title: 'Запчастини',
      img: Parts,
      link: '/parts',
      category: 'parts',
    },
    {
      title: 'Набори',
      img: Sets,
      link: '/sets',
      category: 'sets',
    },
  ];

  return (
    <Menu>
      <MenuContainer>
        {items.map((item, index) => (
          <MenuItem
            key={index}
            onClick={e => onChangeCategory(e, item.category)}
          >
            <Link to={item.link}>
              <Image src={item.img} alt={item.link} />
              <h3 className="menu-item-title">{item.title}</h3>
            </Link>
          </MenuItem>
        ))}
      </MenuContainer>
    </Menu>
  );
};

export default CatalogProducts;
