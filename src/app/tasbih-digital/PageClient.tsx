"use client";

import React from "react";
import Icon from "@/components/Icons";
import { useTasbih } from "@/hooks/useTasbih";

const PageClient = () => {
  const { counter, toggleTasbih, resetCounter } = useTasbih();

  const handleToggleTasbih = (value: number) => {
    toggleTasbih(value);

    if (navigator.vibrate) {
      navigator.vibrate(200);
    } else {
      console.log("vibrate not support");
    }
  };

  return (
    <div className="flex flex-col gap-10 items-center">
      <button
        className="text-black px-6 font-bold py-1.5 bg-gray-200 rounded-full cursor-pointer select-none"
        onClick={resetCounter}
      >
        Mulai Lagi
      </button>
      <div className="flex flex-col items-center text-black select-none">
        <p className="font-arabic font-bold text-xl">سُبْحَانَ اللّهِ</p>
        <p className="text-8xl flex items-center justify-center gap-2">
          {counter} <span className="text-xl font-bold">X</span>
        </p>
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={() => handleToggleTasbih(counter + 1)}
          className="flex items-center justify-center p-6 bg-gray-200 rounded-full cursor-pointer border-6 border-white"
        >
          <Icon name="chevron-forward-outline" size={150} className="text-black -rotate-90" />
        </button>
        <button className="flex items-center justify-center p-6 bg-gray-200 rounded-full cursor-pointer border-6 border-white -mt-10">
          <Icon
            onClick={() => handleToggleTasbih(counter - 1)}
            name="chevron-forward-outline"
            size={40}
            className="text-black rotate-90"
          />
        </button>
      </div>
    </div>
  );
};

export default PageClient;

/**
 * Hooks function for:
 * 1. increment
 * 2. decrement
 * 3. current count
 * 4. reset
 */
