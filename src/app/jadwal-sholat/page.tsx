import React from "react";
import ListView from "./ListView";

const PrayerSchedule = () => {
  return (
    <main className="p-4 w-full flex flex-col gap-6">
      <div className="flex flex-col">
        <h1 className="text-black text-2xl font-bold flex gap-2 items-center">
          ⏰ <span>Jadwal Sholat</span>
        </h1>
        <div className="text-gray-400 flex text-sm">
          <p className="ml-8">Jakarta/Asia | 31/05/2025</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <ListView />
      </div>
    </main>
  );
};

export default PrayerSchedule;
