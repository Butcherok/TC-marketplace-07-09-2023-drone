import { Image } from 'react-bootstrap';

import { MenuItem, Menu } from './CatalogMenu.styled';

import Drons from './MenuImg/drons.jpg';
import Accessories from './MenuImg/accessories.jpg';
import SpareParts from './MenuImg/spare-parts.jpg';
import Sets from './MenuImg/sets.jpg';

const CatalogMenu = ({ isMenuOpen }) => {
  const items = [
    {
      title: 'Дрони',
      img: Drons,
      link: 'drons',
      // display: 'flex',
      // opacity: '1',
    },
    {
      title: 'Аксесуари',
      img: Accessories,
      link: 'accessories',
      // display: isMenuOpen ? 'flex' : 'none',
      // opacity: isMenuOpen ? '1' : '0',
    },
    {
      title: 'Запчастини',
      img: SpareParts,
      link: 'spare-parts',
      // display: isMenuOpen ? 'flex' : 'none',
      // opacity: isMenuOpen ? '1' : '0',
    },
    {
      title: 'Набори',
      img: Sets,
      link: 'sets',
      // display: isMenuOpen ? 'flex' : 'none',
      // opacity: isMenuOpen ? '1' : '0',
    },
  ];

  return (
    <Menu>
      {items.map((item, index) => (
        <MenuItem
          isMenuOpen={isMenuOpen}
          key={index}
          isFirstItem={index === 0}
        >
          <Image src={item.img} alt={item.link} />
          <h3 className="menu-item-title">{item.title}</h3>
        </MenuItem>
      ))}
    </Menu>
  );
};

export default CatalogMenu;
