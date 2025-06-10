"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "./Icons";
import { MenuItem } from "@/types/menus";

const Sidebar = () => {
  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    {
      href: "/",
      target: "_self",
      label: "Beranda",
      icon: "home-outline" as const,
    },
    {
      href: "/tentang",
      label: "Tentang",
      target: "_self",
      icon: "information-circle-outline" as const,
    },
    {
      href: process.env.NEXT_PUBLIC_USER_FEEDBACK_URL || "/",
      label: "Feedback",
      target: "_blank",
      icon: "chat-bubble-outline" as const,
    },
  ];

  return (
    <aside className="border-r border-gray-200 dark:border-[#181818] h-full flex flex-col justify-between p-4">
      <nav>
        <ul className="flex flex-col gap-6">
          {menuItems.map((item) => {
            const isActive = item.href === pathname;

            return (
              <li
                key={item.href}
                className={`text-black duration-300 dark:text-white ${isActive ? " font-bold" : "font-medium"}`}
              >
                <Link href={item.href} className="flex items-center gap-2" target={item.target}>
                  <Icon name={item.icon} size={24} />
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <Link href="/" className="text-sm font-medium underline text-gray-900 dark:text-white">
        Muslimpocket.id
      </Link>
    </aside>
  );
};

export default Sidebar;
