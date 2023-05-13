import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import navbarStyles from '../styles/Navigation.module.css';

const links = [
  { path: '/', text: 'Books' },
  { path: 'categories', text: 'Categories' },
];

function Navigation() {
  return (
    <nav className="dFlex flexSpace navbarContainer">
      <div className="dFlex">
        <h1 className={navbarStyles.navbarTitle}>BookStore CMS</h1>
        <ul className="dFlex flexSpace navbarLinks">
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className={navbarStyles.navbarProfile}>
        <FaUserAlt className={navbarStyles.logo} />
      </div>
    </nav>
  );
}

export default Navigation;
