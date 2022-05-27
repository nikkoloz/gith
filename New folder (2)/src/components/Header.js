import React from "react";
import { NavLink } from "react-router-dom";
import ROUTES from "../config/ROUTES.js";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.js";

function Header() {
  const { logout } = useContext(AuthContext);
  return (
    <header>
      <NavLink
        to={ROUTES.DASHBOARD}
        className={({ isActive }) => (isActive ? "active-item" : null)}
      >
        <h1 className="logo-heading">LOGO</h1>
      </NavLink>
      <nav>
        <ul>
          <li>
            <NavLink
              to={ROUTES.DASHBOARD}
              className={({ isActive }) => (isActive ? "active-item" : null)}
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.SEARCH}
              className={({ isActive }) => (isActive ? "active-item" : null)}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to={ROUTES.FAVORITES}
              className={({ isActive }) => (isActive ? "active-item" : null)}
            >
              Favorites
            </NavLink>
          </li>
          <li>
            <button
              onClick={() => {
                logout();
              }}
            >
              Sign Out
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
