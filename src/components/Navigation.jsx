import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className="link" activeClassName="activeLink">
      Home
    </NavLink>

    <NavLink to="/contacts" exact className="link" activeClassName="activeLink">
      Contacts
    </NavLink>

    {/* <NavLink
      to="/todos"
      exact
      className="link" 
      activeClassName="activeLink"
    >
      Заметки
    </NavLink> */}
  </nav>
);

export default Navigation;
