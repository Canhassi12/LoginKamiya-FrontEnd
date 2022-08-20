import React from "react";
import {Login, Register, App} from "../pages";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default function() {
  return (
    <Router>
        <Routes>
          <Route path="/"  element={<Login />}/> 

          <Route path="/register" element={<Register />}/>

          <Route path="/app" element={<App/>}/> 

        </Routes>
    </Router>
  );
}