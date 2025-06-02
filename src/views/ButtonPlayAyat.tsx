"use client";

import React from "react";
import Icon from "@/components/Icons";

const ButtonPlayAyat = () => {
  const handleClickPlayAyah = () => {
    alert("Dengarkan kutipan Ayat akan tersedia segera 🔥");
  };

  return (
    <button
      onClick={handleClickPlayAyah}
      className="cursor-pointer p-3 bg-white shadow rounded-full"
      aria-label="button-play"
    >
      <Icon name="play" className="text-black" />
    </button>
  );
};

export default ButtonPlayAyat;
