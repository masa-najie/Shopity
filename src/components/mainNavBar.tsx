import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import logo from "@/assets/shopity-logo.svg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { MdOutlineShoppingCart, MdOutlinePersonOutline } from "react-icons/md";
import useAuthStore from "@/authStore";
import ProfileDropDown from "./profileDropDown";

const MainNavBar: React.FC = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const [showProfileMenu, setShowProfileMenu] = useState<boolean>(false);
  return (
    <>
      <div className="relative w-full  h-16 flex items-center sm:px-12 sm:justify-center">
        <div className="flex items-center sm:w-3/4 w-full h-full sm:justify-center">
          <div className="mr-3 h-1/2 flex sm:h-3/4">
            <img src={logo} />
          </div>
          <div className="h-1/2 flex items-center w-3/5">
            <input
              type="search"
              placeholder="what are you looking for?"
              className="border border-[#C6C4C4] text-[#C6C4C4] rounded-l-sm pl-2 sm:text-sm text-xs w-full h-full bg-[#F8F8F8] focus:outline-none"
            />
            <button
              type="submit"
              className="h-full lg:w-1/6 w-1/3 rounded-r-sm text-white bg-[#E7602A] sm:text-base text-xs p-1 text-center"
            >
              search
            </button>
          </div>
        </div>
        <div className="items-center h-full  sm:flex hidden lg:text-lg text-sm">
          <div className="flex items-center m-3">
            <CiHeart className="size-6" />
            <NavLink to="wishList">Wishlist</NavLink>
          </div>
          <div className="flex items-center m-3">
            <MdOutlineShoppingCart className="size-6" />
            <NavLink to="cart">Cart</NavLink>
          </div>
          <div className="flex items-center m-3">
            <MdOutlinePersonOutline className="size-6" />
            {isAuthenticated ? (
              <button
                onClick={() => {
                  setShowProfileMenu(!showProfileMenu);
                }}
              >
                Profile
              </button>
            ) : (
              <NavLink to="login">Login</NavLink>
            )}
            {showProfileMenu && <ProfileDropDown />}
          </div>
        </div>
        <div className="max-md:flex hidden items-center h-full mr-5 justify-center">
          <button
            onClick={() => {
              setShowList(!showList);
            }}
          >
            <FaBars />
          </button>
        </div>
        {showList && (
          <div className="absolute top-16 right-0 bg-white shadow-lg w-48 p-4 pt-0  block sm:hidden z-50">
            <div className="flex justify-start items-center mb-2">
              <MdOutlineShoppingCart className="h-1/6 mt-0.5 mr-3" />
              <NavLink
                to="cart"
                className="block py-2 text-black hover:bg-gray-100"
                onClick={() => setShowList(false)}
              >
                Cart
              </NavLink>
            </div>
            <div className="flex justify-start items-center mb-2">
              <CiHeart className="h-1/6 mt-0.5 mr-3" />
              <NavLink
                to="wishList"
                className="block py-2 text-black hover:bg-gray-100"
                onClick={() => setShowList(false)}
              >
                Wishlist
              </NavLink>
            </div>
            <div className="flex justify-start items-center mb-2">
              <MdOutlinePersonOutline className="h-1/6 mt-0.5 mr-3" />
              {isAuthenticated ? (
                <button
                  onClick={() => {
                    setShowProfileMenu(!showProfileMenu);
                  }}
                >
                  Profile
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className=" py-2 text-black hover:bg-gray-100"
                >
                  Login
                </NavLink>
              )}
            </div>
            {showProfileMenu && <ProfileDropDown />}
          </div>
        )}
      </div>
    </>
  );
};

export default MainNavBar;
