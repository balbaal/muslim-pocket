"use client";

import React, { useEffect, useState } from "react";
import BackToTopView from "./BackToTopView";

const BackToTopContainer = () => {
  const [currentScroll, setCurrentScroll] = useState<number>(0);

  useEffect(() => {
    const handleCurrentScroll = () => setCurrentScroll(window.scrollY);
    window.addEventListener("scroll", handleCurrentScroll);

    return () => window.removeEventListener("scroll", handleCurrentScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  if (currentScroll < 10000) return null;

  return (
    <div className="fixed z-50 right-4 bottom-25 sm:bottom-16 bg-orange-500 rounded-full p-3 flex items-center justify-center transition-all duration-500 animate-slide-up">
      <BackToTopView handleOnClick={handleScrollTop} />
    </div>
  );
};

export default BackToTopContainer;
