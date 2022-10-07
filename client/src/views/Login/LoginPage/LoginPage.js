import React from "react";
import LoginForm from "../LoginForm/LoginForm";

function LoginPage(props) {
  return <LoginForm setToken={props.setToken} />;
}

export default LoginPage;
