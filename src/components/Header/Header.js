import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
        <div className="site-logo">
          <NavLink to="/">
            <img src={Logo} alt="" />
          </NavLink>
        </div>
        <div className="site-navigation">
          <nav>
            <ul>
              <li><NavLink to="/shop">Shop</NavLink></li>
              <li><NavLink to="/order">Order</NavLink></li>
              <li><NavLink to="/manage">Manage Inventory</NavLink></li>
            </ul>
          </nav>
        </div>
    </div>
  )
}

export default Header
