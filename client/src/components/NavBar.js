import { React, useState } from "react";

function NavBar() {
  const [toggle, setToggle] = useState("none");
  const handleClick = () => {
    if (toggle === "none") {
      setToggle("block");
    } else {
      setToggle("none");
    }
  };

  return (
    <div className="NavBar">
      <a className="logo" href="/">
        Snap and Shoot
      </a>
      <a className="nav-sign-in" href="/signin">
        add signin here
      </a>
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleClick}>
          Dropdown Icon here
        </button>
        <div style={{ display: toggle }} className="dropdown-content">
          <a href="/add">Add</a>
          <a href="/search">Search</a>
          <a href="/module2">Module 2</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
