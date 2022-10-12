import { React, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

function AuthPage(props) {
  const [state, setState] = useState("login");

  const handleCreateAccount = () => {
    if (state === "login") {
      setState("register");
    } else {
      setState("login");
    }
  };

  return (
    <div>
      {state === "login" && (
        <LoginForm setState={handleCreateAccount} setToken={props.setToken} />
      )}

      {state === "register" && <RegisterForm setState={handleCreateAccount} />}
    </div>
  );
}

export default AuthPage;
