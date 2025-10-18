"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icons";
import { getCheckpoint } from "@/lib/storage";
import { SurahCheckPoint } from "@/types/checkpoint";
import { getSurahSlugById } from "@/lib/utils";

const CheckpointCard = () => {
  const [checkpoint, setCheckpoint] = useState<SurahCheckPoint | null>(null);

  useEffect(() => {
    const checkpoint = getCheckpoint();
    setCheckpoint(checkpoint);
  }, []);

  if (!checkpoint) {
    return (
      <Link
        href="/semua-surah"
        className="h-[84px] flex items-center justify-between w-full shadow rounded-lg p-4 bg-gray-100 text-black dark:bg-dark-800 dark:text-white"
      >
        <p>Belum ada, Ayo mulai baca Surah 🔥</p>
        <Icon name="arrow-forward" size={20} />
      </Link>
    );
  }

  return (
    <div className="flex flex-col gap-2 shadow rounded-lg p-4 bg-gray-100 text-black dark:bg-dark-800 dark:text-white">
      <Link
        href={`/surah/${getSurahSlugById(Number(checkpoint.number))}?ayah=${checkpoint.ayah_number}`}
        className="flex items-center justify-between"
      >
        <div className="flex flex-col">
          <p className="text-2xl font-arabic font-bold">{checkpoint.name}</p>
          <p className="text-sm">
            {checkpoint.name_latin} ({checkpoint.number}:{checkpoint.ayah_number})
          </p>
        </div>
        <Icon name="arrow-forward" size={20} />
      </Link>
    </div>
  );
};

export default CheckpointCard;
