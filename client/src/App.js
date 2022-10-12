import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  AdminPage,
  HomePage,
  AuthPage,
  PageNotFound,
  PhotographersPage,
  Cloud,
  MyProfilePage,
} from "./views";
import NavBar from "./components/layout/NavBar/NavBar";
import useToken from "./services/useToken";

function App() {
  const { token, setToken } = useToken();

  //if (!token) {
  //return <LoginPage setToken={setToken} />;
  //}
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
            element={<AuthPage setToken={setToken} />}
          ></Route>
          <Route exact path="/module2" element={<Cloud />}></Route>
          <Route exact path="/profile" element={<MyProfilePage />}></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
