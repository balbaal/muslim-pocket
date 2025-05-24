"use client";

import React from "react";
import AyatCard from "@/components/AyatCard";
import { SurahItem } from "@/types/surah";

interface ListViewProps {
  surahData: SurahItem;
}

const ListView = ({ surahData }: ListViewProps) => {
  const handleOnClickCopy = (ayatNumber: string, surahData: SurahItem) => {
    console.log(">>> Handle Copy . . .", ayatNumber);
    console.log(">>> Handle Copy . . .", surahData);
  };

  const handleOnClickShare = (value: string) => {
    console.log(">>> Handle Share . . .", value);
  };

  return Object.entries(surahData.text).map(([number, text]) => (
    <AyatCard
      key={number}
      onClickCopy={() => handleOnClickCopy(number, surahData)}
      onClickShare={() => handleOnClickShare(surahData.number)}
      ayatNumber={number}
      arabicText={text}
      translationText={surahData.translations.id.text[number]}
    />
  ));
};

export default ListView;
