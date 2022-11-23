import React from "react";

import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";
import Welcome from "./components/Welcome";
import Dictaphone from "./components/voice";


function MainRoutes() {


  return (
    <div>
      <Routes>
        <Route path="/register/user" element={<Register />} />
        <Route path="/" element={<About />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/voice" element={<Dictaphone/>} />
        <Route path="/login" element={<Login />} />
   
     </Routes>
    </div>
  );
}

export default MainRoutes;
