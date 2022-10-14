import { React, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AdminPage,
  HomePage,
  AuthPage,
  PageNotFound,
  PhotographersPage,
  MyProfilePage,
  DashboardPage,
} from "./views";
import NavBar from "./components/layout/NavBar/NavBar";
import useToken from "./services/useToken";

function App() {
  const { token, setToken } = useToken();
  const [email, setEmail] = useState();

  // This keeps track of who the user is in the current session
  const handleEmailChange = (email) => {
    setEmail(email);
  };

  // if (!token) {
  //   return <AuthPage setToken={setToken} />;
  // }
  // Routing of the Application.
  // The routing also includes the props send out to each component
  return (
    <Router>
      <div className="app">
        <NavBar token={token} setToken={setToken} />
        <Routes>
          <Route exact path="/" element={<HomePage />}></Route>
          <Route
            exact
            path="/photographers"
            element={<PhotographersPage />}
          ></Route>
          <Route exact path="/admin" element={<AdminPage />}></Route>
          <Route
            exact
            path="/auth/signin"
            element={
              <AuthPage setToken={setToken} handleEmail={handleEmailChange} />
            }
          ></Route>
          <Route
            exact
            path="/profile"
            element={<MyProfilePage email={email} />}
          ></Route>
          <Route
            exact
            path="/dashboard"
            element={
              <DashboardPage token={token} setToken={setToken} email={email} />
            }
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
