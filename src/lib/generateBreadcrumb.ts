import { surahList } from "@/data/surah-list";
import { Breadcrumb } from "@/types/breadcrumb";
import { getSurahSlugById } from "./utils";

const generateBreadcrumb = (path: string) => {
  const mappingPath: Record<string, Breadcrumb[]> = {
    "/semua-surah": [
      { label: "Beranda", url: "/" },
      { label: "Semua Surah", url: "/semua-surah" },
    ],
  };

  // Check if the path matches "/surah/[number]"
  const surahPathMatch = path.match(/^\/surah\/(\d+)$/);
  if (surahPathMatch) {
    const number = surahPathMatch[1];
    const surah = surahList.find((surah) => surah.number === number);

    return [
      { label: "Beranda", url: "/" },
      { label: "Semua Surah", url: "/semua-surah" },
      { label: surah?.name_latin || "-", url: `/surah/${getSurahSlugById(Number(number))}` },
    ];
  }

  return mappingPath[path];
};

export default generateBreadcrumb;
