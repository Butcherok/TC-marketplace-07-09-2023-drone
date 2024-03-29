import React from 'react';
import { Link, Nav, NavItem, NavList } from './Nav.styled';

const NavBar = ({ onCategoryChange }) => {
  return (
    <Nav>
      <NavList>
        <NavItem>
          <Link
            onClick={() => {
              onCategoryChange('drones', 'Дрони');
            }}
            to={'/drones'}
          >
            Магазин
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/articles'}>Статті</Link>
        </NavItem>
        <NavItem>
          <Link to={'/manufacturers'}>Виробники</Link>
        </NavItem>
      </NavList>
    </Nav>
  );
};

export default NavBar;
