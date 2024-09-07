// import React from "react";
import MainNavBar from "@/components/mainNavBar.tsx";
import CategoriesNavBar from "@/components/categoriesNavBar.tsx";
import { Outlet } from "react-router-dom";
const HomeLayout: React.FC = () => {
  return (
    <>
      <MainNavBar />
      <CategoriesNavBar />
      <Outlet />
    </>
  );
};
export default HomeLayout;
