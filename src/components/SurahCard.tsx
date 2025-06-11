"use client";

import React, { useCallback } from "react";
import { SurahItemPreview } from "@/types/surah";
import Link from "next/link";
import Icon from "./Icons";
import { toArabicNumber } from "@/lib/transformString";
import { motion, useAnimation } from "framer-motion";

type HandleToggleFavorite = (event: React.MouseEvent) => void;

type SurahCardProps = SurahItemPreview & {
  revelation_type: "Madaniyah" | "Makkiyah";
  isFavorite: boolean;
  handleToggleFavorite: HandleToggleFavorite;
};

const SurahCard: React.FC<SurahCardProps> = ({
  number,
  name,
  name_latin,
  translation_name,
  number_of_ayah,
  revelation_type,
  isFavorite,
  handleToggleFavorite,
}) => {
  const controls = useAnimation();
  const triggerAnimation = useCallback(() => {
    controls.start({
      scale: [1, 1.5, 1],
      transition: { duration: 0.4 },
    });

    if (navigator?.vibrate) {
      navigator.vibrate(200);
    }
  }, [controls]);

  return (
    <Link
      href={`/surah/${number}`}
      className="bg-gray-100 dark:bg-dark-800 rounded-lg p-4 flex gap-4 text-black dark:text-white"
    >
      <div className="flex items-start">
        <p className="font-arabic mt-1 text-xl font-bold border border-gray-300 bg-white dark:bg-dark-800 rounded-full flex items-center justify-center w-8 h-8">
          {toArabicNumber(number)}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold">{name_latin}</p>
            <p className="text-xs text-gray-700 dark:text-gray-300">
              {translation_name} • {number_of_ayah} Ayat
            </p>
          </div>
          <p className="font-arabic font-bold text-2xl">{name}</p>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`text-xs px-2 py-1 rounded text-right ${revelation_type === "Madaniyah" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}
          >
            {revelation_type}
          </p>
          <motion.button
            onTap={triggerAnimation}
            animate={controls}
            onClick={handleToggleFavorite}
            className="cursor-pointer"
            aria-label="button-favorite"
          >
            <Icon
              name={isFavorite ? "heart" : "heart-outline"}
              size={24}
              className="text-red-500"
            />
          </motion.button>
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
