import React from "react";
import PageClient from "./PageClient";
import { Metadata } from "next";
import { metadataMap } from "@/lib/metadata";
import { createOGMeta } from "@/lib/ogMeta";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: metadataMap.digitalTasbih.title,
  description: metadataMap.digitalTasbih.description,
  keywords: [
    "tasbih digital",
    "dzikir online",
    "tasbih online",
    "tasbih gratis",
    "alat dzikir web",
    "penghitung dzikir",
    "muslim pocket",
  ],
  openGraph: createOGMeta({
    title: metadataMap.digitalTasbih.title,
    description: metadataMap.digitalTasbih.description,
    url: "https://muslimpocket.id/tasbih-digital",
    type: "website",
  }),
};

const TasbihDigital = () => {
  return (
    <main className="p-4 w-full flex flex-col gap-6 text-black dark:text-white">
      <h1 className="text-2xl font-bold flex gap-2 items-center">
        🛐 <span>Tasbih Digital</span>
      </h1>
      <PageClient />
    </main>
  );
};

export default TasbihDigital;
