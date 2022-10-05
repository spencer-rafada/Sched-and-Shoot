import { React, useState } from "react";
import { DropdownButton } from "../components";

function Dropdown(props) {
  const [toggle, setToggle] = useState("none");
  const handleClick = () => {
    if (toggle === "none") {
      setToggle("block");
    } else {
      setToggle("none");
    }
  };
  return (
    <div>
      <DropdownButton onClick={handleClick} />
      <ul style={{ display: toggle }}>{props.children}</ul>
    </div>
  );
}

export default Dropdown;
