import React from "react";
import PageClient from "./PageClient";

const PrayerSchedule = () => {
  return (
    <main className="p-4 w-full flex flex-col gap-6">
      <h1 className="text-black text-2xl font-bold flex gap-2 items-center">
        ⏰ <span>Jadwal Sholat</span>
      </h1>
      <PageClient />
    </main>
  );
};

export default PrayerSchedule;
