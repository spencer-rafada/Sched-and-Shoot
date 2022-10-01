import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <nav className="NavBar">
        <ul>
          <li>
            <Link className="logo" to="/">Snap and Shoot</Link>
          </li>
          <li className="nav-right">
            <Link to="/search">Photographers in your area</Link>
          </li>
          <li className="nav-right">
            <Link to="/add">Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;