import { NavLink } from "react-router-dom";
import {
  MdOutlinePersonOutline,
  MdOutlineShoppingCart,
  MdLogout,
} from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { RiCoupon3Line } from "react-icons/ri";
const ProfileDropDown: React.FC = () => {
  return (
    <>
      <div className="absolute sm:top-16 right-0  bg-white shadow-lg sm:w-46 px-4 mt-3 sm:mt-0 w-48">
        <div className="flex justify-start items-center mb-2">
          <MdOutlinePersonOutline className="mr-3" />
          <NavLink
            to="Account"
            className="block py-2 text-black hover:bg-gray-100 "
          >
            My Account
          </NavLink>
        </div>
        <div className="flex justify-start items-center mb-2">
          <MdOutlineShoppingCart className="mr-3" />
          <NavLink
            to="orders"
            className="block py-2 text-black hover:bg-gray-100"
          >
            My Orders
          </NavLink>
        </div>
        <div className="flex justify-start items-center mb-2">
          <GrLocation className="mr-3" />
          <NavLink
            to="Saved-Address"
            className="block py-2 text-black hover:bg-gray-100"
          >
            Saved Address
          </NavLink>
        </div>
        <div className="flex justify-start items-center mb-2">
          <RiCoupon3Line className="mr-3" />
          <NavLink
            to="Coupons"
            className="block py-2 text-black hover:bg-gray-100"
          >
            My Coupons
          </NavLink>
        </div>
        <div className="flex justify-start items-center mb-2">
          <MdLogout className="mr-3" />
          <button className="block py-2 text-black hover:bg-gray-100">
            Log out
          </button>
        </div>
      </div>
    </>
  );
};
export default ProfileDropDown;
