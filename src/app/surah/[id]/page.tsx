import React from "react";
import PageClient from "./PageClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muslim Pocket - Baca per Surah",
  description: "Baca per Surah",
};

const SurahDetail = () => {
  return (
    <main className="p-4 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold text-black flex items-center gap-2">
        📖 <span>Baca per Surah</span>
      </h1>
      <PageClient />
    </main>
  );
};

export default SurahDetail;
