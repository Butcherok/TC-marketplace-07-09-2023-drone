import { Image } from 'react-bootstrap';

import { MenuItem, Menu, Link } from './CatalogMenu.styled';

import Drons from './MenuImg/drons.jpg';
import Accessories from './MenuImg/accessories.jpg';
import SpareParts from './MenuImg/spare-parts.jpeg';
import Sets from './MenuImg/sets.jpg';

const CatalogMenu = ({ isMenuOpen }) => {
  const items = [
    {
      title: 'Дрони',
      img: Drons,
      link: '/drons',
    },
    {
      title: 'Аксесуари',
      img: Accessories,
      link: '/accessories',
    },
    {
      title: 'Запчастини',
      img: SpareParts,
      link: '/spare-parts',
    },
    {
      title: 'Набори',
      img: Sets,
      link: '/sets',
    },
  ];

  return (
    <Menu>
      {items.map((item, index) => (
        <MenuItem isMenuOpen={isMenuOpen} key={index} isFirstItem={index === 0}>
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
