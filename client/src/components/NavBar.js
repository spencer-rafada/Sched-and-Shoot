import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "../components";

function NavBar(props) {
  return (
    <nav className="NavBar">
      <div className="logo">
        <Link to="/">Snap and Shoot</Link>
      </div>
      <div className="nav-right">
        <Dropdown>
          <ul>
            <li>
              <Link to="/module2">Module 2</Link>
            </li>
            <li>
              <Link to="/add">Add</Link>
            </li>
            <li>
              <Link to="/search">Search</Link>
            </li>
          </ul>
        </Dropdown>
      </div>
    </nav>
  );
}

export default NavBar;
