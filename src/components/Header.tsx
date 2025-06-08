"use client";

import React from "react";
import Icon from "./Icons";
import Link from "next/link";
import { useMenuStore } from "@/store/useMenuStore";

const Header = () => {
  const { isMenuOpen, toggleMenu } = useMenuStore();

  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <button aria-label="action-button-sidebar" onClick={toggleMenu} className="cursor-pointer">
        {isMenuOpen ? (
          <Icon
            name="close-outline"
            className="text-gray-600 hover:text-gray-900 duration-300"
            size={24}
          />
        ) : (
          <Icon
            name="menu-outline"
            className="text-gray-600 hover:text-gray-900 duration-300"
            size={24}
          />
        )}
      </button>
      <Link href="/" className="cursor-pointer">
        <p className="text-xl font-bold text-black">Muslimpocket.id</p>
      </Link>
      <Link aria-label="redirect-button-semua-surah" href="/semua-surah" className="cursor-pointer">
        <Icon
          name="search-outline"
          className="text-gray-600 hover:text-gray-900 duration-300 cursor-pointer"
          size={20}
        />
      </Link>
    </header>
  );
};

export default Header;
