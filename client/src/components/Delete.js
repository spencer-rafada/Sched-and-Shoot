import { React, useState } from "react";

export default function Delete(props) {
  const [f_name, setFName] = useState("");

  // This will handle the changes in first name text box
  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };
  // This will handle the delete
  const handleDelete = (e) => {
    // e.preventDefault();
    const delete_data = {
      first_name: f_name,
    };
    props.onDelete(delete_data);
  };

  return (
    <div className="delete">
      <div className="form">
        <h1>Remove a Photographer ♥</h1>
        <form onSubmit={handleDelete}>
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
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
}
