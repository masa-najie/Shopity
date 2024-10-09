"use client";

import MainNavBar from "@/components/mainNavBar";
import CategoriesNavBar from "@/components/categoriesNavBar";

const HomeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <MainNavBar />
      <CategoriesNavBar />
      <main>{children}</main> {/* This replaces the <OutLet /> */}
    </>
  );
};

export default HomeLayout;
