// src/App.js
import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import RegisterUser from "./pages/RegisterUser";
import Login from "./pages/Login";

function App() {
  return (
    <AuthProvider>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/registerUser" element={<RegisterUser />} />
          <Route path="/" element={<Login />} />
        </Routes>
    </AuthProvider>
  );
}

export default App;
