import { surahList } from "@/data/surah-list";
import { Step } from "@/types/step";

const generateStepper = (path: string) => {
  const mappingPath: Record<string, Step[]> = {
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
      { label: surah?.name_latin || "-", url: `/surah/${number}` },
    ];
  }

  return mappingPath[path];
};

export default generateStepper;
