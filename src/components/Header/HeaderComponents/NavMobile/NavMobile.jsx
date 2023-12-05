import Accordion from '../../../UI/Accordion/Accordion';
import {
  NavMenu,
  NavMobileList,
  NavMobileItem,
  LinkNavMobile,
} from './NavMobile.styled';

const NavMobile = () => {
  const items = [
    {
      title: 'Дрони',
      icon: 'drons',
      link: '/drons',
    },
    {
      title: 'Аксесуари',
      icon: 'accessories',
      link: '/accessories',
    },
    {
      title: 'Запчастини',
      icon: 'spare-parts',
      link: '/spare-parts',
    },
    {
      title: 'Набори',
      icon: 'sets',
      link: '/sets',
    },
  ];
  
  return (
    <NavMenu>
      <NavMobileList>
        <NavMobileItem>
          <Accordion title="Каталог" items={items} />
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
