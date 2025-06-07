import React from "react";
import { Metadata } from "next";
import { metadataMap } from "@/lib/metadata";
import PageClient from "./PageClient";
import { createOGMeta } from "@/lib/ogMeta";
import SchemaJsonLd from "@/components/SchemaJsonLd";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: metadataMap.allSurah.title,
  description: metadataMap.allSurah.description,
  openGraph: createOGMeta({
    title: metadataMap.allSurah.title,
    description: metadataMap.allSurah.description,
    url: "https://muslimpocket.id/semua-surah",
    type: "article",
  }),
};

const SurahList = () => {
  return (
    <main className="p-4 flex flex-col gap-4 w-full">
      <SchemaJsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          url: "https://muslimpocket.id/semua-surah",
          name: metadataMap.allSurah.title,
          description: metadataMap.allSurah.description,
          inLanguage: "id",
        }}
      />
      <h1 className="text-2xl font-bold text-black flex items-center gap-2">
        📖 <span>Semua Surah</span>
      </h1>
      <PageClient />
    </main>
  );
};

export default SurahList;
