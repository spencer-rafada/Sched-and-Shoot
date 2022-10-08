import { React, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function NavBar(props) {
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
      {!props.token && (
        <a className="nav-sign-in" href="/signin">
          Sign In
        </a>
      )}
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleClick}>
          <MenuIcon />
        </button>
        <div style={{ display: toggle }} className="dropdown-content">
          <a href="/photographers">Photographers</a>
          <a href="/module2">Module 2</a>
          <a href="/">Log Out</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
