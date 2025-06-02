"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Icon from "@/components/Icons";
import { getCheckpoint } from "@/lib/storage";
import { SurahCheckPoint } from "@/types/checkpoint";

const CheckpointCard = () => {
  const [checkpoint, setCheckpoint] = useState<SurahCheckPoint | null>(null);

  useEffect(() => {
    const checkpoint = getCheckpoint();
    setCheckpoint(checkpoint);
  }, []);

  if (!checkpoint) {
    return (
      <div className="flex flex-col gap-2 shadow rounded-lg p-4 bg-gray-100 text-black">
        <Link href="/semua-surah" className="flex items-center justify-between">
          <p>Belum ada, Ayo mulai baca Surah 🔥</p>
          <Icon name="arrow-forward" size={20} />
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 shadow rounded-lg p-4 bg-gray-100 text-black">
      <Link
        href={`/surah/${checkpoint.number}?ayah=${checkpoint.ayah_number}`}
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
