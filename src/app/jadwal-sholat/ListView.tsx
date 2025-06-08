"use client";

import React from "react";
import { usePrayerStore } from "@/store/prayerStore";

const ListView = () => {
  const prayerSchedule = usePrayerStore((state) => state.prayerSchedule);
  const isLoadingPrayer = usePrayerStore((state) => state.isLoadingPrayer);

  if (isLoadingPrayer) return <p className="text-center text-gray-500">Memuat jadwal sholat...</p>;

  return prayerSchedule.map((prayer, i) => {
    const date = new Date();
    const isToday = prayer.date.day === date.getDate();

    return (
      <section
        key={i + 1}
        className={`text-black dark:text-white bg-gray-100 dark:bg-dark-800 rounded-lg w-full p-4 shadow flex flex-col gap-2 ${isToday ? "bg-green-100 dark:bg-green-900 border border-green-500" : null}`}
      >
        <h2 className="text-lg font-bold">{prayer.readableDate}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
          {prayer.prayerTime.map((item, idx) => (
            <div
              key={idx + 1}
              className="bg-white dark:bg-dark-900 rounded-lg p-2 flex flex-col text-center"
            >
              <p className="text-sm">{item.name}</p>
              <p className="text-sm font-bold">{item.time}</p>
            </div>
          ))}
        </div>
      </section>
    );
  });
};

export default ListView;
