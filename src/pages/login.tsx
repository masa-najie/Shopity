import React from "react";
import sideBg from "../assets/sideBg.jpg";
import logo from "../assets/shopity-logo.svg";
import useTogglePassword from "../hooks/useTogglePassword";
import { FcGoogle } from "react-icons/fc";

const Login: React.FC = () => {
  const [Icon, dataType]: [React.ComponentType, string] = useTogglePassword();

  return (
    <>
      <div className="bg-indigo-50 min-h-screen flex items-center justify-center">
        <div className="sm:w-4/6 w-11/12 sm:h-5/6 bg-white drop-shadow-2xl rounded-md flex flex-row">
          <div className="sm:w-1/2 rounded-l-md sm:pt-12 md:p-16 w-full m-5 sm:m-0">
            <div className="pb-3">
              <img src={logo} alt="Logo" />
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
                type="email"
                className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 mt-2 focus:outline-none"
                placeholder="enter your email"
                required
              />
            </div>
            <div className="pt-3 w-full">
              <label>Password:</label>
              <div className="relative w-full">
                <input
                  type={dataType}
                  className="border-gray-300 w-full border rounded-md text-sm h-9 p-3 pr-10 mt-2 appearance-none focus:outline-none"
                  placeholder="enter your password"
                  required
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
              >
                Login
              </button>
            </div>
            <hr className="w-full border-1 border-gray-300 mt-7 rounded-full" />
            <button
              type="submit"
              className="w-full h-9 rounded-md border-gray-300 border mt-6 text-blue-900 font-bold flex justify-center items-center"
            >
              <FcGoogle className="mr-2 size-5" />
              <span className="text-xs">Login using Google account</span>
            </button>
            <div className="text-xs mt-5 justify-center flex items-center">
              <span className="text-gray-500">Don&apos;t have an account?</span>
              <a className="text-blue-900 font-bold pl-1">Register</a>
            </div>
          </div>
          <div className="sm:w-1/2 hidden sm:block">
            <img
              src={sideBg}
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
