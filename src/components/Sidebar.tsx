"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "./Icons";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems = [
    {
      href: "/",
      label: "Beranda",
      icon: "home-outline" as const,
    },
    {
      href: "/settings",
      label: "Setelan",
      icon: "settings-outline" as const,
    },
    {
      href: "/about",
      label: "Tentang",
      icon: "alert-circle-outline" as const,
    },
  ];

  return (
    <aside className="border-r h-full flex flex-col justify-between p-4">
      <nav>
        <ul className="flex flex-col gap-6">
          {menuItems.map((item) => (
            <li
              key={item.href}
              className={`text-gray-600 hover:text-gray-900 duration-300 ${
                pathname === item.href ? "text-gray-900 font-bold" : "font-medium"
              }`}
            >
              <Link href={item.href} className="flex items-center gap-2">
                <Icon name={item.icon} size={24} />
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-sm font-medium underline text-gray-900">Muslim-Pocket.com</p>
    </aside>
  );
};

export default Sidebar;
