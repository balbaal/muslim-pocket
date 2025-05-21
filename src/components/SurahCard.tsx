import React from "react";
import { Surah } from "@/types/surah";

type SurahCardProps = Surah;

const SurahCard: React.FC<SurahCardProps> = ({
  number,
  name,
  englishName,
  englishNameTranslation,
  numberOfAyahs,
  revelationType,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 border border-gray-100">
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-full">
            <span className="text-emerald-600 font-semibold">{number}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{name}</h3>
            <p className="text-gray-600">{englishName}</p>
          </div>
        </div>
        <span className="px-3 py-1 text-sm bg-emerald-50 text-emerald-600 rounded-full">
          {revelationType}
        </span>
      </div>
      
      <div className="mt-4">
        <p className="text-gray-500 text-sm">{englishNameTranslation}</p>
        <div className="mt-3 flex items-center text-gray-400 text-sm">
          <span>{numberOfAyahs} Ayahs</span>
        </div>
      </div>
    </div>
  );
};

export default SurahCard;
