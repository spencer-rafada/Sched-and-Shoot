import { React, useState } from "react";
import axios from "axios";
import FileBase64 from "react-file-base64";

function EditProfile({ setToggle, data }) {
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [password, setPassword] = useState("");
  const [img, setImg] = useState("");

  const handleEdit = () => {
    const new_profile = {
      first: first,
      last: last,
      email: data.email,
      password: password,
      img: img,
    };
    axios({ method: "put", url: "/profile/edit", data: [new_profile] }).then(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
    alert("Profile has been updated");
  };

  return (
    <div>
      <h1>Edit Profile</h1>
      <div>
        <form onSubmit={handleEdit}>
          <label>
            First Name{" "}
            <input
              type="text"
              placeholder={data.first}
              onChange={(e) => setFirst(e.target.value)}
            />
          </label>
          <br></br>
          <label>
            Last Name{" "}
            <input
              type="text"
              placeholder={data.last}
              onChange={(e) => setLast(e.target.value)}
            />
          </label>
          <br></br>
          <p>Your email is {data.email}</p>
          <label>
            Password{" "}
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <br></br>
          <div>
            <FileBase64
              multiple={false}
              onDone={({ base64 }) => setImg(base64)}
            />
          </div>
          <button type="button" onClick={setToggle}>
            Click me to view Profile
          </button>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default EditProfile;
