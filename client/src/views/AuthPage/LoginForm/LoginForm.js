import { React, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// send POST request to sign in data to server
async function loginUser(credentials) {
  return axios({
    method: "post",
    url: "http://localhost:5000/auth/signin",
    data: [
      {
        email: credentials.email,
        password: credentials.password,
      },
    ],
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function LoginForm({ setToken, setState }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  let navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ email, password });
    // Add functionality here to check for the response of the backend
    setToken(token.data);
    console.log(`this is the token: ${token.data.token}`);
    if (token.data.token === "token1234") {
      setError(false);
      navigate("/");
    } else {
      setError(true);
    }
  };

  return (
    <div className="sign-in">
      <div className="form">
        <h1>Sign In</h1>
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
        {error && <p className="log-in-error">Account is not registered</p>}
        <p onClick={setState} className="register-link">
          Create account
        </p>
      </div>
    </div>
  );
}

// Require the token
LoginForm.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginForm;
