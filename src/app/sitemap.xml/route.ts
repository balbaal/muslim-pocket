const TOTAL_SURAH = 114;

export async function GET() {
  const baseUrl = "https://muslimpocket.id";

  const surahUrls = Array.from({ length: TOTAL_SURAH }, (_, i) => {
    const nomor = i + 1;
    return `${baseUrl}/surah/${nomor}`;
  });

  const staticUrls = [
    `${baseUrl}/`,
    `${baseUrl}/jadwal-sholat`,
    `${baseUrl}/semua-surah`,
    `${baseUrl}/tentang`,
    `${baseUrl}/tasbih-digital`,
  ];

  const allUrls = [...staticUrls, ...surahUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    (url) => `
  <url>
    <loc>${url}</loc>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
  </url>`
  )
  .join("")}
</urlset>`.trim();

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
