"use client";

import React, { useCallback, useEffect, useState } from "react";
import ListView from "./ListView";
import { SurahItem } from "@/types/surah";
import { VerseItem } from "@/types/verse";

interface ContainerListViewProps {
  surahData: SurahItem;
}

const ContainerListView = ({ surahData }: ContainerListViewProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [verseList, setVerseList] = useState<VerseItem[]>([]);

  const mappedVerseList = useCallback((): VerseItem[] => {
    const mappedResult: VerseItem[] = Object.entries(surahData.text).map(
      ([number, verse]): VerseItem => {
        const translation = surahData.translations.id.text[number];
        const tafsir = surahData.tafsir.id.kemenag.text[number];

        return {
          number: number,
          text: verse,
          translation: translation,
          tafsir: tafsir,
        };
      }
    );

    return mappedResult;
  }, [surahData]);

  useEffect(() => {
    setIsLoading(true);
    const result = mappedVerseList();
    setVerseList(result);
    setIsLoading(false);
  }, [mappedVerseList]);

  return (
    <article className="flex flex-col gap-2">
      <ListView surahData={surahData} verseList={verseList} />
      {isLoading && (
        <div className="py-4 text-center">
          <p className="text-gray-500">Memuat ayat lainnya...</p>
        </div>
      )}

      {/* TODO: Add infinite scroll */}
      {/* {hasMore && (
        <div className="py-4 text-center">
          <p className="text-gray-500">Fetching more data...</p>
        </div>
      )} */}
    </article>
  );
};

export default ContainerListView;
