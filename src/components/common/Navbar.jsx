import React from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/Images/logo.png";

function Navbar() {
  const location = useLocation();

  return (
    <div className="w-full h-20 bg-white flex flex-row justify-between items-center px-32">
      <div className="flex justify-start">
        <img src={logo} alt="Logo" className="h-12" />
      </div>
      <div className="flex flex-row justify-center space-x-8 text-lg">
        <Link
          to="/home"
          className={`cursor-pointer transition-all ${
            location.pathname === "/home" ? "font-bold" : "hover:font-semibold"
          }`}
        >
          HOME
        </Link>
        <Link
          to="/favourites"
          className={`cursor-pointer transition-all ${
            location.pathname === "/favourites" ? "font-bold" : "hover:font-semibold"
          }`}
        >
          FAVOURITE
        </Link>
      </div>
      <span className="material-symbols-outlined transition-all duration-300 hover:font-semibold text-3xl cursor-pointer">
        logout
      </span>
    </div>
  );
}

export default Navbar;
