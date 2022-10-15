import React from "react";

function Logout({ setToken }) {
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("email");
    setToken();
  };

  return (
    <a onClick={handleLogout} href="/">
      Logout
    </a>
  );
}

export default Logout;
