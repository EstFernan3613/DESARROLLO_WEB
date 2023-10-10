// NavComponent.jsx

import React from 'react';
import { Link, NavLink } from 'react-router-dom'

export const NavComponent = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink activeClassName="active" to="/" exact>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/about">
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

