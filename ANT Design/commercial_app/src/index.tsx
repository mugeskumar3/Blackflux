import React from "react";
import "./index.css";
import App from "./App";
import Login from "./login";
import { Route, Router, Routes } from "react-router-dom";
import ReactDOM from "react-dom";

const handleLogin = () => {
  setLoggedIn(true);
};
ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/app" element={<App />} />
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/language"/>
      <Route path="/steps"/>  
      <Route path="/user"  />
      <Route path="/medium" />
    </Routes>
  </Router>,
  document.getElementById("root")
)

function setLoggedIn(arg0: boolean) {
  throw new Error("Function not implemented.");
}

