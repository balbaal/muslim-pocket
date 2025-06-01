"use client";

import React from "react";
import ListView from "./ListView";
import { usePrayerStore } from "@/store/prayerStore";

const PrayerSchedule = () => {
  const timeZone = usePrayerStore((state) => state.timeZone);

  return (
    <main className="p-4 w-full flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-black text-2xl font-bold flex gap-2 items-center">
          ⏰ <span>Jadwal Sholat</span>
        </h1>
        {!!timeZone && (
          <div className="text-gray-400 flex text-sm">
            <p className="ml-8">{timeZone}</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <ListView />
      </div>
    </main>
  );
};

export default PrayerSchedule;
