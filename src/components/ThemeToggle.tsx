"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setDark] = useState(false);

  const handleToggleTheme = () => {
    const root = window.document.documentElement;
    setDark((state) => {
      if (!state) {
        root.classList.add("dark");
        localStorage.setItem("theme", "dark");
        return true;
      } else {
        root.classList.remove("dark");
        localStorage.setItem("theme", "light");
        return false;
      }
    });
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      const root = window.document.documentElement;
      root.classList.add("dark");
      setDark(true);
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <button
      aria-label="toggle-switch-theme"
      onClick={handleToggleTheme}
      className="text-lg cursor-pointer w-7 h-7 bg-gray-300 dark:bg-gray-700 text-black rounded"
    >
      {isDark ? "🌞" : "🌒"}
    </button>
  );
}
