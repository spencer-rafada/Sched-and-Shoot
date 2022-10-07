import { React, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

// send POST request to sign in data to server
async function loginUser(credentials) {
  return axios({
    method: "post",
    url: "http://localhost:5000/signin",
    data: [
      {
        email: credentials.email,
        password: credentials.password,
      },
    ],
  }).then((response) => response.data);
}

function LoginForm({ setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ email, password });
    console.log(`this is the token: ${token}`);
    setToken(token);
  };

  return (
    <div className="sign-in">
      <div className="form">
        <h1>Sign In ♥</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

// Require the token
LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginForm;
