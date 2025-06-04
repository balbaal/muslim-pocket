import React from "react";
import { Metadata } from "next";
import PageClient from "./PageClient";
import { metadataMap } from "@/lib/metadata";
import { createOGMeta } from "@/lib/ogMeta";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: metadataMap.prayerSchedule.title,
  description: metadataMap.prayerSchedule.description,
  openGraph: createOGMeta({
    title: metadataMap.prayerSchedule.title,
    description: metadataMap.prayerSchedule.description,
    url: "https://muslim-pocket.vercel.app/jadwal-sholat",
    type: "article",
  }),
};

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
