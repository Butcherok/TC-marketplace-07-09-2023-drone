import { useState } from 'react';

import { useApi } from 'contexts/ApiContext/ApiContext';
import Accordion from '../../../UI/Accordion/Accordion';
import {
  NavMenu,
  NavMobileList,
  NavMobileItem,
  LinkNavMobile,
} from './NavMobile.styled';

const NavMobile = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const items = [
    {
      title: 'Дрони',
      icon: 'drons',
      link: '/drons',
      category: 'drone',
    },
    {
      title: 'Аксесуари',
      icon: 'accessories',
      link: '/accessories',
      category: 'accessories',
    },
    {
      title: 'Запчастини',
      icon: 'spare-parts',
      link: '/spare-parts',
      category: 'parts',
    },
    {
      title: 'Набори',
      icon: 'sets',
      link: '/sets',
      category: 'sets',
    },
  ];

  const handleCategoryChange = category => {
    setSelectedCategory(category);
  };
  console.log(selectedCategory)

  return (
    <NavMenu>
      <NavMobileList>
        <NavMobileItem>
          <Accordion
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
