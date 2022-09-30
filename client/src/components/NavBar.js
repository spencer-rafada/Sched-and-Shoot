import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Photographers in your area</Link>
          </li>
          <li>
            <Link to="/add">Add</Link>
          </li>

        </ul>
      </nav>
    </div>
  )
}

export default NavBar;