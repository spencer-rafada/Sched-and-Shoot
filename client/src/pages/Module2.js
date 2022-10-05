import { React, useState } from "react";
import { Add, Photographers, Delete, Modify } from "../components";

function Cloud(props) {
  const [toggle, setToggle] = useState(false);

  const handleButtonClick = () => {
    setToggle(!toggle);
  };
  return (
    <div>
      <button onClick={handleButtonClick}>Click Me!</button>
      {toggle && (
        <div>
          <Add list={props.list} onAdd={props.onAdd} />
          <Photographers list={props.list} />
          <Delete onDelete={props.onDelete} />
          <Modify onModify={props.onModify} />
        </div>
      )}
    </div>
  );
}

export default Cloud;
