"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export default function ThemeToggle() {
  const [isDark, setDark] = useState(false);
  const controls = useAnimation();

  const handleToggleTheme = () => {
    const root = window.document.documentElement;

    const currentTheme = !isDark;

    if (currentTheme) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDark(currentTheme);
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDark(currentTheme);
    }

    const metaTag = document.querySelector("meta[name='theme-color']");
    if (metaTag) {
      metaTag.setAttribute("content", currentTheme ? "#0a0a0a" : "#ffffff");
    }
  };

  const triggerAnimate = useCallback(() => {
    controls.start({
      scale: [1, 1.3, 1],
      transition: { duration: 0.4 },
    });

    if (!!navigator?.vibrate) {
      navigator.vibrate(200);
    }
  }, [controls]);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDark(true);
    }
  }, []);

  return (
    <motion.button
      onTap={triggerAnimate}
      animate={controls}
      aria-label="toggle-switch-theme"
      onClick={handleToggleTheme}
      className="text-lg cursor-pointer w-7 h-7 bg-gray-300 dark:bg-gray-700 text-black rounded"
    >
      {isDark ? "🌞" : "🌒"}
    </motion.button>
  );
}
