import Link from "next/link";
import {
  MdOutlinePersonOutline,
  MdOutlineShoppingCart,
  MdLogout,
} from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
import useAuthStore from "@/authStore";
import { ApiResponse } from "@/types";
const ProfileDropDown: React.FC = () => {
  const logout = async () => {
    const token = useAuthStore.getState().token;
    const response = await fetch(
      "http://ecommerce-backend.cubeta.io/api/v1/auth/logout",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data: ApiResponse<null> = await response.json();
    if (data.code == 200) {
      useAuthStore.getState().logout();
      window.location.reload();
    }
  };
  return (
    <>
      <div className="absolute sm:top-16 right-0  bg-white shadow-lg sm:w-46 px-4 mt-3 sm:mt-0 w-48 z-50">
        <div className="flex justify-start items-center mb-2">
          <MdOutlinePersonOutline className="mr-3" />
          <Link
            href="Account"
            className="block py-2 text-black hover:bg-gray-100 "
          >
            My Account
          </Link>
        </div>
        <div className="flex justify-start items-center mb-2">
          <MdOutlineShoppingCart className="mr-3" />
          <Link
            href="orders"
            className="block py-2 text-black hover:bg-gray-100"
          >
            My Orders
          </Link>
        </div>
        <div className="flex justify-start items-center mb-2">
          <GrLocation className="mr-3" />
          <Link
            href="Saved-Address"
            className="block py-2 text-black hover:bg-gray-100"
          >
            Saved Address
          </Link>
        </div>
        <div className="flex justify-start items-center mb-2">
          <RiCoupon3Line className="mr-3" />
          <Link
            href="Coupons"
            className="block py-2 text-black hover:bg-gray-100"
          >
            My Coupons
          </Link>
        </div>
        <div className="flex justify-start items-center mb-2">
          <MdLogout className="mr-3" />
          <button
            className="block py-2 text-black hover:bg-gray-100"
            onClick={logout}
          >
            Log out
          </button>
        </div>
      </div>
    </>
  );
};
export default ProfileDropDown;
