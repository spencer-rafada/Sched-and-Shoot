import { React, useState } from "react";
import { Add, Delete, Modify } from "./Admin";
import PhotographersPage from "./Photographers/PhotographersPage/PhotographersPage";

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
            <PhotographersPage list={props.list} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Cloud;
