"use client";

import React from "react";
import Sidebar from "@/components/Sidebar";
import { useMenuStore } from "@/store/useMenuStore";

const SidebarContainer = () => {
  const { isMenuOpen, closeMenu } = useMenuStore();

  return (
    <div>
      {/* Overlay Mobile Sidebar */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black opacity-50 z-20 sm:hidden" onClick={closeMenu} />
      )}
      {/* Mobile Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 transform transition-transform duration-300 ease-in-out z-30 sm:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>
      {/* Desktop Sidebar */}
      <div className="hidden sm:block">
        <Sidebar />
      </div>
    </div>
  );
};

export default SidebarContainer;
