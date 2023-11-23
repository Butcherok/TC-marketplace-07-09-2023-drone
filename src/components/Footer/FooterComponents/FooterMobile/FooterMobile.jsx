import { Nav, NavList, NavItem, Link } from './FooterMobile.styled';

import Icon from '../../../UI/Icon/Icon';

const FooterMobile = () => {
  const icons = [
    { id: 'home', alt: 'Home', link: '' },
    { id: 'user', alt: 'User', link: 'user' },
    { id: 'favorite', alt: 'Favorite', link: 'favorites' },
    { id: 'cart', alt: 'Cart', link: 'cart' },
  ];

  return (
    <Nav>
      <NavList>
        {icons.map((icon, index) => (
          <NavItem key={index}>
            <Link to={`/${icon.link}`}>
              <Icon id={icon.id} />
            </Link>
          </NavItem>
        ))}
        
      </NavList>
    </Nav>
  );
};

export default FooterMobile;
