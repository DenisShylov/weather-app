import SignOut from 'Components/Auth/SignOut';

import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className="header-container">
      <NavLink to="/homepage"> Домашняя страница</NavLink>

      <NavLink to="/cabinet">Личный кабинет</NavLink>

      <SignOut />
    </div>
  );
};

export default Header;
