import { React, useState } from "react";
import { Add, Photographers, Delete, Modify } from "../components";

function Cloud(props) {
  const [toggle, setToggle] = useState(false);

  const handleButtonClick = () => {
    setToggle(!toggle);
  };
  return (
    <div className="module2">
      <div>
        <button onClick={handleButtonClick}>Click Me!</button>
      </div>
      {toggle && (
        <div>
          <Add list={props.list} onAdd={props.onAdd} />
          <Delete onDelete={props.onDelete} />
          <Modify onModify={props.onModify} />
          <hr></hr>
          <div>
            <Photographers list={props.list} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cloud;
