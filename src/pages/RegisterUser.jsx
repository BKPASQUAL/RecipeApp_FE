import React from "react";
import logo from "../assets/Images/logo.png";
import TextField from "@mui/material/TextField";

function RegisterUser() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark-bg">
      <div className="w-2/5 bg-white  p-16 rounded-2xl ">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div>
          <p className="text-2xl text-gray-900	mb-4">Register</p>
          <div className="grid grid-cols-2 gap-4">
            <TextField
              id="firstName"
              label="First Name"
              variant="outlined"
              fullWidth
            />
            <TextField
              id="lastName"
              label="Last Name"
              variant="outlined"
              fullWidth
            />
            <TextField id="email" label="Email" variant="outlined" fullWidth />
            <TextField
              id="phone number"
              label="Phone"
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
            <TextField
              id="confirmPassword"
              label="Confirm Password"
              variant="outlined"
              fullWidth
              type="password"
            />
          </div>
          <button className="bg-rose-pink h-9  w-36 rounded-md hover:bg-dark-pink text-white transition-all duration-300 mt-6">
            Create Account
          </button>
        </div>
        <div className="text-center text-xs mt-8">Already have an account? Login</div>
      </div>
    </div>
  );
}

export default RegisterUser;
