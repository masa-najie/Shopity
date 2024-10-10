"use client";

import sideBg from "@/assets/sideBg.jpg";
import logo from "@/assets/shopity-logo.svg";
import useTogglePassword from "@/hooks/useTogglePassword";
import { FcGoogle } from "react-icons/fc";
import useAuthStore from "@/authStore";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ApiResponse, AuthData, Error } from "@/types";
import { useState } from "react";
const Register: React.FC = () => {
  const [Icon, dataType]: [React.ComponentType, string] = useTogglePassword();
  const [IconC, dataTypeC]: [React.ComponentType, string] = useTogglePassword();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<FormData>();
  interface FormData {
    first_name: string;
    last_name: string;
    email: string;
    phone: string;
    password: string;
    password_confirmation: string;
  }
  const [formData, setFormData] = useState<FormData>({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    password: "",
    password_confirmation: "",
  });
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const register = async () => {
    setLoading(true);
    const response = await fetch(
      "http://ecommerce-backend.cubeta.io/api/v1/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );
    if (response.ok) {
      const data: ApiResponse<AuthData> = await response.json();
      console.log(data);
      useAuthStore.getState().login(formData, data.data.token);
    } else {
      const data: Error<FormData> = await response.json();
      if (data.code == 405) setError(data.message.errors);
      setLoading(false);
      return;
    }
    router.push("/home");
    setLoading(false);
  };

  return (
    <>
      <div className="bg-indigo-50 min-h-screen flex items-center justify-center">
        <div className="sm:w-4/6 w-11/12 sm:h-5/6 bg-white drop-shadow-2xl rounded-md flex flex-row">
          <div className="sm:w-1/2 rounded-l-md sm:pt-12 md:p-12 w-full m-5 sm:m-0">
            <div className="pb-3">
              <img src={logo.src} alt="Logo" />
            </div>
            <div>
              <h1 className="font-bold text-xl sm:text-2xl text-blue-950 pb-2">
                Create an Account
              </h1>
            </div>
            <div className="pt-6 w-full">
              <label>First Name:</label>
              <input
                name="first_name"
                type="text"
                className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 mt-2 focus:outline-none"
                placeholder="enter your fisrt name"
                required
                onChange={handelChange}
              />
              {error?.first_name && (
                <p className="text-red-700 text-sm mt-2">{error.first_name}</p>
              )}
            </div>
            <div className="pt-3 w-full">
              <label>Last Name:</label>
              <input
                name="last_name"
                type="text"
                className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 mt-2 focus:outline-none"
                placeholder="enter your last name"
                required
                onChange={handelChange}
              />{" "}
              {error?.last_name && (
                <p className="text-red-700 text-sm  mt-2">{error.last_name}</p>
              )}
            </div>
            <div className="pt-3 w-full">
              <label>Email:</label>
              <input
                name="email"
                type="email"
                className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 mt-2 focus:outline-none"
                placeholder="enter your email"
                required
                onChange={handelChange}
              />
              {error?.email && (
                <p className="text-red-700 text-sm  mt-2">{error.email}</p>
              )}
            </div>
            <div className="pt-3 w-full">
              <label>Phone Number:</label>
              <input
                name="phone"
                type="text"
                className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 pr-10 mt-2 appearance-none focus:outline-none"
                placeholder="enter your password"
                required
                onChange={handelChange}
              />
              {error?.phone && (
                <p className="text-red-700 text-sm  mt-2">{error.phone}</p>
              )}
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
                {error?.password && (
                  <p className="text-red-700 text-sm  mt-2">{error.password}</p>
                )}
              </div>
            </div>
            <div className="py-3 w-full">
              <label>Re-enter Password:</label>
              <div className="relative w-full">
                <input
                  name="password_confirmation"
                  type={dataTypeC}
                  className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 pr-10 mt-2 appearance-none focus:outline-none"
                  placeholder="enter your password"
                  required
                  onChange={handelChange}
                />
                <IconC />
              </div>
            </div>
            <div className="pt-3 w-full flex items-center">
              <input type="checkbox" className="text-sm pl-2 mt-1" />
              <span className="text-xs font-bold pl-2 text-blue-900">
                Remember me
              </span>
            </div>
            <div className="pt-5 w-full">
              <button
                type="submit"
                className="w-full h-9 text-white rounded-md bg-indigo-800"
                onClick={register}
                disabled={loading}
              >
                Register
              </button>
            </div>
            <hr className="w-full border-1 border-gray-300 mt-7 rounded-full" />
            <button
              type="submit"
              className="w-full h-9 rounded-md border-gray-300 border mt-6 text-blue-900 font-bold flex justify-center items-center"
            >
              <FcGoogle className="mr-2 size-5" />
              <span className="text-xs">Register using Google account</span>
            </button>
            <div className="text-xs mt-5 justify-center flex items-center">
              <span className="text-gray-500">Have an account already?</span>
              <Link href="/login" className="text-blue-900 font-bold pl-1">
                Login
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
export default Register;
