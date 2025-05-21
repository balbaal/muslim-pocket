"use client";

import React, { useState } from "react";
import Icon from "./Icons";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClickMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="flex items-center justify-between border-b px-4 py-3">
      <button onClick={handleClickMenu} className="cursor-pointer">
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
        <p className="text-xl font-bold text-black">Muslim Pocket</p>
      </Link>
      <Link href="/all-surah" className="cursor-pointer">
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
