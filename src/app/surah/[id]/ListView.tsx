"use client";

import React, { useEffect, useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import AyatCard from "@/components/AyatCard";
import { SurahItem } from "@/types/surah";
import { SurahCheckPoint } from "@/types/checkpoint";
import { setCheckpoint, getCheckpoint } from "@/lib/storage";
import { toast } from "@/store/toastStore";

interface ListViewProps {
  surahData: SurahItem;
}

const ListView = ({ surahData }: ListViewProps) => {
  const [checkpointData, setCheckpointData] = useState<SurahCheckPoint | null>(null);
  const ayahRefs = useRef<Record<string, HTMLDivElement>>({});

  const searchParam = useSearchParams();
  const ayahCheckpoint = searchParam.get("ayah");

  const handleOnClickCopy = (ayatNumber: string, surahData: SurahItem) => {
    console.log(">>> Handle Copy . . .", ayatNumber);
    console.log(">>> Handle Copy . . .", surahData);
  };

  const handleOnClickShare = (value: string) => {
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
    if (ayahCheckpoint) {
      const element = ayahRefs.current[ayahCheckpoint];
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [ayahCheckpoint]);

  useEffect(() => {
    const checkpoint = getCheckpoint();
    if (checkpoint) {
      setCheckpointData(checkpoint);
    }
  }, []);

  return Object.entries(surahData.text).map(([number, text]) => {
    const isCheckpoint =
      surahData?.number === checkpointData?.number && number === checkpointData?.ayah_number;
    return (
      <div
        key={number}
        ref={(el) => {
          if (el) {
            ayahRefs.current[number] = el;
          }
        }}
      >
        <AyatCard
          onClickCopy={() => handleOnClickCopy(number, surahData)}
          onClickShare={() => handleOnClickShare(surahData.number)}
          onClickPin={() =>
            handleOnClickPin({
              name: surahData.name,
              name_latin: surahData.name_latin,
              number: surahData.number,
              ayah_number: number,
              timestamp: new Date().toISOString(),
            })
          }
          ayatNumber={number}
          arabicText={text}
          translationText={surahData.translations.id.text[number]}
          isCheckpoint={isCheckpoint}
        />
      </div>
    );
  });
};

export default ListView;
