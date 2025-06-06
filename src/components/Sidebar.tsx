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
      icon: "alert-circle-outline" as const,
    },
    {
      href: "https://docs.google.com/forms/d/e/1FAIpQLSejktcdD2jtth9LGK8J0f2RbywQvxLHxRYQQVdLhVFnyj7rxQ/viewform",
      label: "Feedback",
      target: "_blank",
      icon: "chat-bubble-outline" as const,
    },
  ];

  return (
    <aside className="border-r h-full flex flex-col justify-between p-4">
      <nav>
        <ul className="flex flex-col gap-6">
          {menuItems.map((item) => {
            const isActive = item.href === pathname;

            return (
              <li
                key={item.href}
                className={`text-gray-600 hover:text-gray-900 duration-300 ${
                  isActive ? "text-gray-900 font-bold" : "font-medium"
                }`}
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
      <p className="text-sm font-medium underline text-gray-900">Muslimpocket.id</p>
    </aside>
  );
};

export default Sidebar;
