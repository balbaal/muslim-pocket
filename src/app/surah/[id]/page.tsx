import React from "react";
import PageClient from "./PageClient";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { SurahItem } from "@/types/surah";
import { createOGMeta } from "@/lib/ogMeta";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  let surahData: SurahItem = {} as SurahItem;

  try {
    const response = await import(`@/data/surah/${id}.ts`);
    surahData = response.default;
  } catch (error) {
    console.log(">>> error:", error);
    notFound();
  }

  const metadataTitle = `Surah ${surahData.name_latin} - Teks Arab, Latin & Terjemahan | Muslim Pocket`;
  const metadataDescription = `Baca Surah ${surahData.name_latin} lengkap dengan teks Arab, latin, dan terjemahan bahasa Indonesia. Dilengkapi nomor ayat dan tampilan bersih.`;

  return {
    metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
    title: metadataTitle,
    description: metadataDescription,
    openGraph: createOGMeta({
      title: metadataTitle,
      description: metadataDescription,
      url: `https://muslimpocket.id/surah/${id}`,
      type: "article",
    }),
  };
}

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
