import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import TextField from "@mui/material/TextField";
import Swal from "sweetalert2";
import logo from "../assets/Images/logo.png";
import { useAddUserMutation } from "../store/api/userApi";
import { useNavigate } from "react-router-dom";

const schema = yup.object().shape({
  firstName: yup.string().required("First Name is required"),
  lastName: yup.string().required("Last Name is required"),
  email: yup.string().email("Enter a valid email").required("Email is required"),
  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Phone number must be 10 digits")
    .required("Phone number is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match")
    .required("Confirm Password is required"),
});

function RegisterUser() {
  const [addUser, { isLoading }] = useAddUserMutation();
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await addUser(data).unwrap();
      console.log("User added successfully:", response);

      Swal.fire({
        icon: "success",
        title: "Account Created!",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });

      reset();
      navigate("/");
      setErrorMessage(null);
    } catch (error) {
      console.error("Error registering user:", error);
      setErrorMessage(
        error?.data?.message ||
          error?.data?.errors?.[0]?.msg ||
          "An error occurred. Please try again."
      );

      // Show error toast notification
      Swal.fire({
        icon: "error",
        title: "Registration Failed",
        text: errorMessage || "An unexpected error occurred.",
        timer: 3000,
        showConfirmButton: false,
        toast: true,
        position: "top-end",
      });
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-dark-bg">
      <div className="w-2/5 bg-white p-16 rounded-2xl">
        <div className="flex justify-center mb-6">
          <img src={logo} alt="Logo" className="h-12" />
        </div>
        <div>
          <p className="text-2xl text-gray-900 mb-4">Register</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-4">
              <Controller
                name="firstName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={errors.firstName?.message}
                  />
                )}
              />
              <Controller
                name="lastName"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="outlined"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName?.message}
                  />
                )}
              />
              <Controller
                name="email"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email?.message}
                  />
                )}
              />
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Phone"
                    variant="outlined"
                    fullWidth
                    error={!!errors.phoneNumber}
                    helperText={errors.phoneNumber?.message}
                  />
                )}
              />
              <Controller
                name="password"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    error={!!errors.password}
                    helperText={errors.password?.message}
                  />
                )}
              />
              <Controller
                name="confirmPassword"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirm Password"
                    variant="outlined"
                    fullWidth
                    type="password"
                    error={!!errors.confirmPassword}
                    helperText={errors.confirmPassword?.message}
                  />
                )}
              />
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="bg-rose-pink h-9 w-36 rounded-md hover:bg-dark-pink text-white transition-all duration-300 mt-6"
            >
              {isLoading ? "Submitting..." : "Create Account"}
            </button>
          </form>
          {errorMessage && (
            <p className="text-red-500 mt-2">{errorMessage}</p>
          )}
        </div>
        <div className="text-center text-xs mt-8">
          Already have an account? <a href="/" className="text-blue-500">Login</a>
        </div>
      </div>
    </div>
  );
}

export default RegisterUser;
