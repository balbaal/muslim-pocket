import { slugReferences } from "@/data/url-slug-references";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },

  async redirects() {
    // Permanent redirect from /surah/1 to /surah/al-fatihah & etc.
    // This is useful for SEO and user experience, as it allows users to access the Surah by its name instead of its number.
    // Note: Make sure to update this if you change the slug for Surah Al-Fatihah & etc.

    const detailSurah = slugReferences?.map((surah) => ({
      source: `/surah/${surah.id}`,
      destination: `/surah/${surah.slug}`,
      permanent: true, // status code 308 (default)
    }));

    return [...detailSurah];
  },
};

export default nextConfig;
