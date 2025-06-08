"use client";

import React from "react";
import Icon from "@/components/Icons";
import { useTasbih } from "@/hooks/useTasbih";
import { motion } from "framer-motion";

const PageClient = () => {
  const { counter, toggleTasbih, resetCounter } = useTasbih();

  const handleToggleTasbih = (value: number) => {
    toggleTasbih(value);

    if (!!navigator?.vibrate) {
      navigator.vibrate(200);
    } else {
      console.log("vibrate not support");
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center text-black dark:text-white">
      <div className="flex flex-col items-center select-none">
        <p className="font-arabic font-bold text-xl">سُبْحَانَ اللّهِ</p>
        <p className="text-8xl flex items-center justify-center gap-2">
          {counter} <span className="text-xl font-bold">X</span>
        </p>
      </div>
      <div className="flex flex-col items-center relative">
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleToggleTasbih(counter + 1)}
          className="flex items-center justify-center p-6 bg-gray-200 dark:bg-dark-800 rounded-full cursor-pointer border-6 border-white dark:border-dark-900 absolute top-0"
        >
          <Icon
            name="chevron-forward-outline"
            size={150}
            className="text-black dark:text-white -rotate-90"
          />
        </motion.button>
        <motion.button
          whileTap={{ scale: 0.8 }}
          onClick={() => handleToggleTasbih(counter - 1)}
          className="flex items-center justify-center p-6 bg-gray-200 dark:bg-dark-800 rounded-full cursor-pointer border-6 border-white dark:border-dark-900 absolute top-40"
        >
          <Icon
            name="chevron-forward-outline"
            size={40}
            className="text-black dark:text-white rotate-90"
          />
        </motion.button>
      </div>
      <button
        className="px-6 font-bold py-1.5 bg-gray-200 dark:bg-dark-800 rounded-full cursor-pointer select-none mt-66"
        onClick={resetCounter}
      >
        Mulai Lagi
      </button>
    </div>
  );
};

export default PageClient;
