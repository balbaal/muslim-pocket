"use client";

import React from "react";
import Icon from "./Icons";
import Link from "next/link";
import { useMenuStore } from "@/store/useMenuStore";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();

  return (
    <header className="flex items-center justify-between border-b border-gray-200 dark:border-0 px-4 py-3">
      <button aria-label="action-button-sidebar" onClick={toggleMenu} className="cursor-pointer">
        {isMenuOpen ? (
          <Icon
            name="close-outline"
            className="text-gray-900 dark:text-white duration-300"
            size={24}
          />
        ) : (
          <Icon
            name="menu-outline"
            className="text-gray-900 dark:text-white duration-300"
            size={24}
          />
        )}
      </button>
      <Link href="/" className="cursor-pointer">
        <p className="text-xl font-bold text-black dark:text-white">Muslimpocket.id</p>
      </Link>
      <ThemeToggle />
    </header>
  );
};

export default Header;
