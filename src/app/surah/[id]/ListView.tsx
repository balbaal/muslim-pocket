"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import AyatCard from "@/components/AyatCard";
import { SurahItem } from "@/types/surah";
import { SurahCheckPoint } from "@/types/checkpoint";
import { setCheckpoint, getCheckpoint } from "@/lib/storage";
import { toast } from "@/store/toastStore";
import { VerseItem } from "@/types/verse";

interface ListViewProps {
  surahData: SurahItem;
  verseList: VerseItem[];
}

const ListView = ({ surahData, verseList }: ListViewProps) => {
  const [checkpointData, setCheckpointData] = useState<SurahCheckPoint | null>(null);
  const ayahRefs = useRef<Record<string, HTMLDivElement>>({});

  const searchParam = useSearchParams();
  const ayahCheckpoint = searchParam.get("ayah");

  const handleOnClickCopy = (ayatNumber: string, surahData: SurahItem) => {
    navigator.clipboard.writeText(
      `${surahData.text[ayatNumber]} - ${surahData.translations.id.text[ayatNumber]} (${surahData.number}:${ayatNumber})`
    );
    toast({
      type: "info",
      message: `Berhasil menyalin ayat <strong>${ayatNumber}</strong> dari surat <strong>${surahData.name_latin}</strong>`,
    });
  };

  const handleOnClickShare = (value: string) => {
    alert("Bagikan Ayat akan tersedia segera 🔥");
    console.log(">>> Handle Share . . .", value);
  };

  const handleOnClickPin = (checkpointData: SurahCheckPoint) => {
    setCheckpointData(checkpointData);
    setCheckpoint(checkpointData);

    toast({
      type: "info",
      message: `Berhasil pin Surat <strong>${checkpointData.name_latin}</strong> Ayat <strong>${checkpointData.ayah_number}</strong> sebagai terakhir dibaca!`,
    });
  };

  useEffect(() => {
    const checkpoint = getCheckpoint();
    if (checkpoint) {
      setCheckpointData(checkpoint);
    }
  }, []);

  useEffect(() => {
    if (ayahCheckpoint) {
      const element = ayahRefs.current[ayahCheckpoint];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [ayahCheckpoint, verseList]);

  return verseList.map((verse) => {
    const isCheckpoint =
      surahData?.number === checkpointData?.number && verse.number === checkpointData?.ayah_number;
    return (
      <div
        key={verse.number}
        ref={(el) => {
          if (el) {
            ayahRefs.current[verse.number] = el;
          }
        }}
      >
        <AyatCard
          onClickCopy={() => handleOnClickCopy(verse.number, surahData)}
          onClickShare={() => handleOnClickShare(surahData.number)}
          onClickPin={() =>
            handleOnClickPin({
              name: surahData.name,
              name_latin: surahData.name_latin,
              number: surahData.number,
              ayah_number: verse.number,
              timestamp: new Date().toISOString(),
            })
          }
          ayatNumber={verse.number}
          arabicText={verse.text}
          translationText={verse.translation}
          isCheckpoint={isCheckpoint}
        />
      </div>
    );
  });
};

export default ListView;
