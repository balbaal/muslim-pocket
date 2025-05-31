"use client";

import React from "react";
import { usePrayerStore } from "@/store/prayerStore";

const ListView = () => {
  const prayerSchedule = usePrayerStore((state) => state.prayerSchedule);

  return prayerSchedule.map((prayer, i) => (
    <section key={i + 1} className="bg-gray-100 rounded-lg w-full p-4 shadow flex flex-col gap-2">
      <h2 className="text-black text-lg font-bold">{prayer.date}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
        {prayer.prayerTime.map((item, idx) => (
          <div key={idx + 1} className="bg-white rounded-lg p-2 flex flex-col text-center">
            <p className="text-black text-sm">{item.name}</p>
            <p className="text-black text-sm font-bold">{item.time}</p>
          </div>
        ))}
      </div>
    </section>
  ));
};

export default ListView;
