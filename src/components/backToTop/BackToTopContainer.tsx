"use client";

import React, { useEffect, useRef } from "react";
import BackToTopView from "./BackToTopView";

const BackToTopContainer = () => {
  const refScrollPosition = useRef<number>(0);

  useEffect(() => {
    const handleCurrentScroll = () => (refScrollPosition.current = window.scrollY);
    window.addEventListener("scroll", handleCurrentScroll);

    return window.removeEventListener("scroll", handleCurrentScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <div className="fixed z-50 right-4 bottom-4 bg-orange-500 rounded-full p-3 flex items-center justify-center">
      <BackToTopView handleOnClick={handleScrollTop} />
    </div>
  );
};

export default BackToTopContainer;
