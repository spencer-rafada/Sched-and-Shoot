import React from "react";
import AuthPage from "../AuthPage/AuthPage";

function DashboardPage({ token, setToken, email }) {
  if (!token) {
    return <AuthPage setToken={setToken} />;
  }

  return <div>Welcome {email}</div>;
}

export default DashboardPage;
