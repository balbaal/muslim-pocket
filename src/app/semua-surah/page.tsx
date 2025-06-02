import React from "react";
import PageClient from "./PageClient";

const SurahList = () => {
  return (
    <main className="p-4 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold text-black flex items-center gap-2">
        📖 <span>Semua Surah</span>
      </h1>
      <PageClient />
    </main>
  );
};

export default SurahList;
