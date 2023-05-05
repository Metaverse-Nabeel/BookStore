import React from 'react';
import { NavLink } from 'react-router-dom';
import navbarStyles from '../styles/Navigation.module.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

function Navigation() {
  return (
    <nav className={navbarStyles.navbarContainer}>
      <div className={navbarStyles.leftNavbar}>
        <h1 className={navbarStyles.navbarTitle}>BookStore CMS</h1>
        <ul className={navbarStyles.navbarLinks}>
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={navbarStyles.profileImg}>
        <h3>Profile Image</h3>
      </div>
    </nav>
  );
}

export default Navigation;
