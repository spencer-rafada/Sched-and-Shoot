import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function DropdownButton(props) {
  var content = props.content;
  var handleClick = props.onClick;
  return (
    <div>
      <MenuIcon className="menu-icon" onClick={handleClick} />
      <div>{content}</div>
    </div>
  );
}

export default DropdownButton;
