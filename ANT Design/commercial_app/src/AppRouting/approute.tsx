// Approute.tsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import App from "../App";
import Login from "../login";
import Language from "../homepage/language_/Language";
import Medium from "../homepage/Medium/Medium";
import User from "../homepage/User/User";
import Steps from "../homepage/steps/Steps";

const Approute: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<App />}>
          <Route path="language" element={<Language />} />
          <Route path="steps" element={<Steps />} />
          <Route path="user" element={<User />} />
          <Route path="medium" element={<Medium />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default Approute;
