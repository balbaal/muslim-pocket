"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { useMenuStore } from "@/store/useMenuStore";

const SidebarContainer = () => {
  const { isMenuOpen, closeMenu } = useMenuStore();

  return (
    <>
      <div
        className={`duration-500 ease-in-out fixed inset-0 bg-black z-20 opacity-50 ${isMenuOpen ? "translate-0" : "-translate-x-full"}`}
        onClick={closeMenu}
      />
      <div
        className={`w-[280px] h-full bg-gray-100 dark:bg-dark-800 shadow-xl dark:shadow-[#181818] z-30 fixed transition-all duration-500 ease-in-out ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar />
      </div>
    </>
  );
};

export default SidebarContainer;
