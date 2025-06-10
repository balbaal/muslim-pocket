import { SurahItemPreview as ListSurah } from "@/types/surah";
import Link from "next/link";
import React from "react";
import Icon from "./Icons";

interface PaginationProps {
  currentSurah: string;
  listSurah: ListSurah[];
}

const Pagination = ({ currentSurah, listSurah }: PaginationProps) => {
  const getSurahName = (surahNumber: string) => {
    const surah = listSurah.find((surah) => surah.number === surahNumber);
    return surah?.name_latin;
  };

  const currentSurahNumber = parseInt(currentSurah);
  let previousSurahNumber = currentSurahNumber - 1;
  let nextSurahNumber = currentSurahNumber + 1;

  if (previousSurahNumber < 1) {
    previousSurahNumber = listSurah.length;
  }

  if (nextSurahNumber > listSurah.length) {
    nextSurahNumber = 1;
  }

  return (
    <div className="text-black dark:text-white flex items-center gap-2 justify-between">
      <Link
        href={`/surah/${previousSurahNumber}`}
        className="bg-gray-100 dark:bg-dark-800 rounded px-4 py-1.5 flex items-center gap-2"
      >
        <Icon name="arrow-forward" size={20} className="text-black dark:text-white rotate-180" />
        {getSurahName(previousSurahNumber.toString())}
      </Link>
      <p>
        {currentSurah} / {listSurah.length}
      </p>
      <Link
        href={`/surah/${nextSurahNumber}`}
        className="bg-gray-100 dark:bg-dark-800 rounded px-4 py-1.5 flex items-center gap-2"
      >
        {getSurahName(nextSurahNumber.toString())}
        <Icon name="arrow-forward" size={20} className="text-black dark:text-white" />
      </Link>
    </div>
  );
};

export default Pagination;
