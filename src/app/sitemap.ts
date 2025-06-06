import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://muslimpocket.id";
  const TOTAL_SURAH = 114;

  const surahUrls = Array.from({ length: TOTAL_SURAH }, (_, i) => {
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

  const allUrls = [...staticUrls, ...surahUrls];
  const results: MetadataRoute.Sitemap = allUrls.map((url) => ({
    url,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [...results];
}
