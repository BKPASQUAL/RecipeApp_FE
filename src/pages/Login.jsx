import React from "react";
import logo from "../assets/Images/logo.png";
import TextField from "@mui/material/TextField";

function Login() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-dark-bg ">
      <div className="w-1/5 bg-white p-14 py-20 rounded-2xl ">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div>
          <p className="text-2xl text-gray-900 mb-4">Login</p>
          <div className="grid gap-4">
            <TextField
              id="email"
              label="email address"
              variant="outlined"
              fullWidth
             
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              fullWidth
              type="password"
             
            />
          </div>
          <button className="bg-rose-pink h-9 w-full rounded-md hover:bg-dark-pink text-white transition-all duration-300 mt-6">
            SIGN IN
          </button>
        </div>
        <div className="text-center  text-xs mt-8">Dont't have an account? Create an account</div>
      </div>
    </div>
  );
}

export default Login;
