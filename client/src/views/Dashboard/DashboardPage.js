import { React, useState } from "react";
import AuthPage from "../AuthPage/AuthPage";

function DashboardPage({ token, setToken }) {
  const [first, setFirst] = useState("");
  const email = sessionStorage.getItem("email");

  if (!token) {
    return <AuthPage setToken={setToken} />;
  }

  return <div>Welcome {email}</div>;
}

export default DashboardPage;
