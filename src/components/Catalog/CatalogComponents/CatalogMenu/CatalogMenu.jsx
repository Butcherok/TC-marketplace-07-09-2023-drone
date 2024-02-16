import { useLocation } from 'react-router-dom';
import { Image } from 'react-bootstrap';
import { useEffect } from 'react';

import { MenuItem, Menu, Link } from './CatalogMenu.styled';

import Drons from './MenuImg/drons.webp';
import Accessories from './MenuImg/accessories.webp';
import SpareParts from './MenuImg/spare-parts.webp';
import Sets from './MenuImg/sets.webp';

const CatalogMenu = ({ isMenuOpen, setIsMenuOpen, onCategoryChange }) => {
  const items = [
    {
      title: 'Дрони',
      img: Drons,
      link: '/drons',
      category: 'drone',
    },
    {
      title: 'Аксесуари',
      img: Accessories,
      link: '/accessories',
      category: 'accessories',
    },
    {
      title: 'Запчастини',
      img: SpareParts,
      link: '/spare-parts',
      category: 'parts',
    },
    {
      title: 'Набори',
      img: Sets,
      link: '/sets',
      category: 'sets',
    },
  ];

  const location = useLocation();
  const isHomePage = location.pathname === '/';
 
  useEffect(() => {
    if (!isHomePage) setIsMenuOpen(true);
  });

  return (
    <Menu>
      {items.map((item, index) => (
        <MenuItem
          $isMenuOpen={isMenuOpen}
          key={index}
          $isFirstItem={index === 0}
          isHomePage={isHomePage}
          onClick={() => {
            onCategoryChange(item.category)
            setIsMenuOpen(false)
          }}
        >
          <Link to={item.link}>
            <Image src={item.img} alt={item.link} />
            <h3 className="menu-item-title">{item.title}</h3>
          </Link>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CatalogMenu;
