import { React, useState } from "react";

function Modify(props) {
  const [f_name, setFName] = useState("");
  const [updateData, setUpdateData] = useState("");

  // This handles the change in first_name
  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };

  // This handles the change in updateData
  const handleUpdateDataChange = (e) => {
    setUpdateData(e.target.value);
  };

  // This handles the even when submit is sent. It sets the state of the photographersList
  // using the props.onAdd function
  const handleModify = (e) => {
    // e.preventDefault();
    const photographer = {
      first_name: f_name,
      updateData: updateData,
    };
    props.onModify(photographer);
  };

  return (
    <div className="modify">
      <div className="form">
        <h1>Modify a Photographer ♥</h1>
        <form onSubmit={handleModify}>
          <label>
            First Name
            <input
              type="text"
              value={f_name}
              placeholder="Your First Name..."
              required
              onChange={(e) => {
                handleFNameChange(e);
              }}
            />
            {/* Handle Change will be called when user write first
                            name in input box */}
          </label>
          <br></br>
          <label>
            Modify Name
            <input
              type="text"
              value={updateData}
              required
              placeholder="New Name..."
              onChange={(e) => {
                handleUpdateDataChange(e);
              }}
            />
          </label>
          <br></br>
          <button type="submit">Modify</button>
        </form>
      </div>
    </div>
  );
}

export default Modify;
