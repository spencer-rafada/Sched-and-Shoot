import { React, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

function AuthPage(props) {
  const [register, setRegister] = useState(false);

  return <LoginForm setToken={props.setToken} />;
}

export default AuthPage;
