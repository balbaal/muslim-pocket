"use client";

import React from "react";
import { SurahItemPreview } from "@/types/surah";
import Link from "next/link";
import Icon from "./Icons";
import { toArabicNumber } from "@/lib/transformString";

type SurahCardProps = SurahItemPreview & { revelation_type: "Madaniyah" | "Makkiyah" };

const SurahCard: React.FC<SurahCardProps> = ({
  number,
  name,
  name_latin,
  translation_name,
  number_of_ayah,
  revelation_type,
}) => {
  return (
    <Link
      href={`/surah/${number}`}
      className="bg-gray-50 rounded-lg p-4  hover:bg-gray-100 flex gap-4"
    >
      <div className="flex items-start">
        <p className="font-arabic mt-1 text-xl font-bold text-black border border-gray-300 bg-white rounded-full flex items-center justify-center w-8 h-8">
          {toArabicNumber(number)}
        </p>
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <p className="font-bold text-black">{name_latin}</p>
            <p className="text-xs text-gray-400">
              {translation_name} • {number_of_ayah} Ayat
            </p>
          </div>
          <p className="font-arabic font-bold text-2xl text-black">{name}</p>
        </div>
        <div className="flex items-center justify-between">
          <p
            className={`text-xs px-2 py-1 rounded text-right ${revelation_type === "Madaniyah" ? "bg-green-100 text-green-800" : "bg-orange-100 text-orange-800"}`}
          >
            {revelation_type}
          </p>
          <Icon name="heart-outline" size={20} className="text-red-500" />
        </div>
      </div>
    </Link>
  );
};

export default SurahCard;
