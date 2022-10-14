import { React, useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./RegisterForm/RegisterForm";

function AuthPage({ setToken, handleEmail }) {
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
        <LoginForm
          setState={handleCreateAccount}
          setToken={setToken}
          handleEmailPage={handleEmail}
        />
      )}

      {state === "register" && <RegisterForm setState={handleCreateAccount} />}
    </div>
  );
}

export default AuthPage;
