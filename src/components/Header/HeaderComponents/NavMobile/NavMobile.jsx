import { useCategory } from 'contexts/CategoryContext/CategoryContext';
import Accordion from '../../../UI/Accordion/Accordion';
import {
  NavMenu,
  NavMobileList,
  NavMobileItem,
  LinkNavMobile,
} from './NavMobile.styled';

const NavMobile = () => {
  const { selectedCategory, handleCategoryChange } = useCategory();

  const items = [
    {
      title: 'Дрони',
      icon: 'drones',
      link: '/drones',
      category: 'drones',
    },
    {
      title: 'Аксесуари',
      icon: 'accessories',
      link: '/accessories',
      category: 'accessories',
    },
    {
      title: 'Запчастини',
      icon: 'parts',
      link: '/parts',
      category: 'parts',
    },
    {
      title: 'Набори',
      icon: 'sets',
      link: '/sets',
      category: 'sets',
    },
  ];

  return (
    <NavMenu>
      <NavMobileList>
        <NavMobileItem>
          <Accordion
            selectedCategory={selectedCategory}
            onCategoryChange={handleCategoryChange}
            title="Каталог"
            items={items}
          />
        </NavMobileItem>
        <NavMobileItem>
          <LinkNavMobile to={'/articles'}>Статті</LinkNavMobile>
        </NavMobileItem>
        <NavMobileItem>
          <LinkNavMobile to={'/manufacturers'}>Виробники</LinkNavMobile>
        </NavMobileItem>
      </NavMobileList>
    </NavMenu>
  );
};

export default NavMobile;
