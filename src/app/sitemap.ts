import { getSurahSlugById } from "@/lib/utils";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muslimpocket.id";
  const TOTAL_SURAH = 114;

  const surahUrls = Array.from({ length: TOTAL_SURAH }, (_, i) => {
    const nomor = i + 1;
    return `${baseUrl}/surah/${getSurahSlugById(nomor)}`;
  });

  // Keep the old Urls by number "/surah/1"
  // This to let google crawl new redirect urls
  // NOTE: will remove this after fully redirect to new url, estimate 6 - 12 months
  const surahUrlsOld = Array.from({ length: TOTAL_SURAH }, (_, i) => {
    const nomor = i + 1;
    return `${baseUrl}/surah/${nomor}`;
  });

  const staticUrls = [
    `${baseUrl}`,
    `${baseUrl}/jadwal-sholat`,
    `${baseUrl}/semua-surah`,
    `${baseUrl}/tentang`,
    `${baseUrl}/tasbih-digital`,
  ];

  const allUrls = [...staticUrls, ...surahUrls, ...surahUrlsOld];
  const results: MetadataRoute.Sitemap = allUrls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [...results];
}
