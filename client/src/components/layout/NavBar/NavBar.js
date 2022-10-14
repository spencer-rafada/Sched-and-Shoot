import { React, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logout from "../../buttons/Logout";
import { Link } from "react-router-dom";

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
        <a className="nav-sign-in" href="/auth/signin">
          Sign In
        </a>
      )}
      <div className="dropdown">
        <button className="dropdown-button" onClick={handleClick}>
          <MenuIcon />
        </button>
        <div style={{ display: toggle }} className="dropdown-content">
          {props.token && <a href="/profile">My Profile</a>}
          <a href="/photographers">Photographers</a>
          {props.token && <Link to="/admin">Admin</Link>}
          {props.token && <Logout props={props.setToken} />}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
