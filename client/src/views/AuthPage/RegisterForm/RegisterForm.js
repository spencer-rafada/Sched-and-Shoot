import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// send POST to register the user in DB
async function registerUser(credentials) {
  axios({
    method: "post",
    url: "/auth/register",
    data: [
      {
        email: credentials.email,
        password: credentials.password,
      },
    ],
  });
}

export default function RegisterForm({ setState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleFNameChange = (e) => {
    setFName(e.target.value);
  };

  const handleLNameChange = (e) => {
    setLName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const new_user = {
      email: email,
      password: password,
      first: fName,
      last: lName,
    };
    registerUser(new_user);
    alert("User is registered");
    navigate("/dashboard");
  };
  return (
    <div className="register">
      <div className="form">
        <h1>Register</h1>
        <p onClick={setState} className="register-link">
          Have an account already?
        </p>
        <form onSubmit={handleSubmit}>
          <label>
            First Name
            <input
              type="text"
              value={fName}
              required
              placeholder="Enter First Name..."
              onChange={(e) => {
                handleFNameChange(e);
              }}
            />
          </label>
          <br></br>
          <label>
            Password
            <input
              type="text"
              value={lName}
              required
              placeholder="Enter Last Name..."
              onChange={(e) => {
                handleLNameChange(e);
              }}
            />
          </label>
          <br></br>
          <label>
            Email
            <input
              type="text"
              value={email}
              placeholder="Enter Email"
              required
              onChange={(e) => {
                handleEmailChange(e);
              }}
            />
            {/* Handle Change will be called when user write first
                    name in input box */}
          </label>
          <br></br>
          <label>
            Password
            <input
              type="password"
              value={password}
              required
              placeholder="Enter Password"
              onChange={(e) => {
                handlePasswordChange(e);
              }}
            />
          </label>
          <br></br>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}
