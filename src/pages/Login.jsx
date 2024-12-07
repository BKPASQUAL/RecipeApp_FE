import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useLoginUserMutation } from "../store/api/authApi";
import logo from "../assets/Images/logo.png";
import { useAuth } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const { login } = useAuth(); 
  const [loginUser] = useLoginUserMutation();
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      const response = await loginUser(data).unwrap(); 
      if (response && response.token) {
        login({ email: data.email, token: response.token }); 
        localStorage.setItem("accessToken", response.token); 
        reset();
        navigate("/home");
        setErrorMessage(null);
        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Welcome to Cook!",
          });
        } else {
          setErrorMessage(
            response?.error?.data?.message ||
              response?.error?.data?.errors[0]?.msg ||
              "Login failed"
          );
        }
      } catch (error) {
        console.error("Login Error", error);
        setErrorMessage("An error occurred during login");
      } finally {
        setLoading(false); 
      }
    };

  const handleCreateAccount = () => {
    navigate("/registerUser");
  };

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-1/5 bg-white p-14 py-20 rounded-2xl shadow-md">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <p className="text-2xl font-bold text-gray-900 mb-4">Login</p>
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            fullWidth
            {...register("email", { required: "Email is required" })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            fullWidth
            type="password"
            {...register("password", { required: "Password is required" })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />
          {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
          <button
            type="submit"
            disabled={loading}
            className="bg-blue-500 h-9 w-full rounded-md hover:bg-blue-600 text-white transition-all duration-300 mt-6"
          >
            {loading ? "Signing In..." : "SIGN IN"}
          </button>
        </form>
        <div className="text-center text-xs mt-8">
          Don't have an account?
          <span
            className="text-blue-500 cursor-pointer hover:underline"
            onClick={handleCreateAccount}
          >
            Create an account
          </span>
        </div>
      </div>
    </div>
  );
}

export default Login;
