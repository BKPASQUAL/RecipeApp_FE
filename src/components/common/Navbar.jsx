import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../../assets/Images/logo.png";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate(); 
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Logout",
      customClass: {
        popup: "w-10/12 max-w-xs md:max-w-lg",
        title: "text-lg md:text-2xl",
        icon: "text-sm md:text-lg",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear(); 
        sessionStorage.clear(); 
        navigate("/"); 
      }
    });
  };

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
            location.pathname === "/favourites"
              ? "font-bold"
              : "hover:font-semibold"
          }`}
        >
          FAVOURITE
        </Link>
      </div>
      <span
        onClick={handleLogout}
        className="material-symbols-outlined transition-all duration-300 hover:font-semibold text-3xl cursor-pointer"
      >
        logout
      </span>
    </div>
  );
}

export default Navbar;
