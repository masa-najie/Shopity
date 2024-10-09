"use client";

import React, { useState } from "react";
import sideBg from "@/assets/sideBg.jpg";
import logo from "@/assets/shopity-logo.svg";
import { FcGoogle } from "react-icons/fc";
import useAuthStore from "@/authStore";
import Swal from "sweetalert2";
import { ApiResponse, User } from "@/types";
import { useRouter } from "next/navigation";
import useTogglePassword from "@/hooks/useTogglePassword";
import Link from "next/link";
const Login: React.FC = () => {
  const [Icon, dataType]: [React.ComponentType, string] = useTogglePassword();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  interface FormData {
    email: string;
    password: string;
  }
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const login = async () => {
    setLoading(true);

    if (formData.email != "" && formData.password != "") {
      interface loginData {
        user: User;
        token: string;
        refresh_token: string;
      }
      const response = await fetch(
        "http://ecommerce-backend.cubeta.io/api/v1/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data: ApiResponse<loginData> = await response.json();
      // console.log(data);

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "the data you just entered is not correct, please try again.",
        });
        setLoading(false);
        return;
      }
      useAuthStore.getState().login(formData, data.data.token);
      router.push("/home");
    } else
      Swal.fire({
        icon: "info",
        text: "please enter your email and password to continue.",
      });
    setLoading(false);
  };
  return (
    <>
      <div className="bg-indigo-50 min-h-screen flex items-center justify-center">
        <div className="sm:w-4/6 w-11/12 sm:h-5/6 bg-white drop-shadow-2xl rounded-md flex flex-row">
          <div className="sm:w-1/2 rounded-l-md sm:pt-12 md:p-16 w-full m-5 sm:m-0">
            <div className="pb-3">
              <img src={logo.src} alt="Logo" />
            </div>
            <div>
              <h1 className="font-bold text-xl sm:text-2xl text-blue-950 pb-2">
                Welcome back!
              </h1>
              <span className="text-gray-600 text-sm">
                Welcome back please sign in
              </span>
            </div>
            <div className="pt-6 w-full">
              <label>Email:</label>
              <input
                name="email"
                type="email"
                className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 mt-2 focus:outline-none"
                placeholder="enter your email"
                required
                onChange={handelChange}
              />
            </div>
            <div className="pt-3 w-full">
              <label>Password:</label>
              <div className="relative w-full">
                <input
                  name="password"
                  type={dataType}
                  className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 pr-10 mt-2 appearance-none focus:outline-none"
                  placeholder="enter your password"
                  required
                  onChange={handelChange}
                />
                <Icon />
              </div>
            </div>
            <div className="pt-3 w-full flex items-center">
              <input type="checkbox" className="text-sm pl-2 mt-1" />
              <span className="text-xs font-bold pl-2 text-blue-900">
                Remember me
              </span>
            </div>
            <div className="pt-3 w-full">
              <button
                type="submit"
                className="w-full h-9 text-white rounded-md bg-indigo-800"
                onClick={login}
                disabled={loading}
              >
                Login
              </button>
            </div>
            <hr className="w-full border-1 border-gray-300 mt-7 rounded-full" />
            <button
              type="submit"
              className="w-full h-9 rounded-md border-gray-300 border mt-6 text-blue-900 font-bold flex justify-center items-center"
              onClick={login}
            >
              <FcGoogle className="mr-2 size-5" />
              <span className="text-xs">Login using Google account</span>
            </button>
            <div className="text-xs mt-5 justify-center flex items-center">
              <span className="text-gray-500">Don&apos;t have an account?</span>
              <Link href="/register" className="text-blue-900 font-bold pl-1">
                Register
              </Link>
            </div>
          </div>
          <div className="sm:w-1/2 hidden sm:block">
            <img
              src={sideBg.src}
              alt="Side Background"
              className="w-full h-full object-cover rounded-r-md"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
