"use client";

import Breadcrumb from "@/components/Breadcrumb";
import SurahCard from "@/components/SurahCard";
import generateBreadcrumb from "@/lib/generateBreadcrumb";
import { useParams } from "next/navigation";
import { SurahItem } from "@/types/surah";
import { surahRevelation } from "@/data/surah-revelation";
import Pagination from "@/components/Pagination";
import { useFavoriteSurah } from "@/hooks/useFavoriteSurah";
import { surahList } from "@/data/surah-list";
import BackToTopContainer from "@/components/backToTop/BackToTopContainer";
import ContainerListView from "./ContainerListView";
import { useEffect, useState } from "react";
import { getSurahIdBySlug } from "@/lib/utils";

const PageClient = () => {
  const [surahData, setSurahData] = useState<SurahItem | null>(null);
  const { isFavorite, toggleFavorite } = useFavoriteSurah();
  const params = useParams<{ slug: string }>();

  const id = getSurahIdBySlug(params.slug);

  const getSurahData = async (): Promise<void> => {
    const surah = await import(`@/data/surah/${id}.ts`);
    setSurahData(surah.default);
  };

  useEffect(() => {
    getSurahData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!surahData)
    return (
      <div className="flex justify-center items-center w-full h-[calc(100vh-150px)]">
        <p className="text-gray-500">Memuat surah...</p>
      </div>
    );

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Breadcrumb breadcrumb={generateBreadcrumb(`/surah/${id}`)} />
        <SurahCard
          number={surahData.number}
          name={surahData.name}
          name_latin={surahData.name_latin}
          translation_name={surahData.translations.id.name}
          number_of_ayah={surahData.number_of_ayah}
          revelation_type={surahRevelation[id]}
          isFavorite={isFavorite(surahData.number)}
          handleToggleFavorite={() =>
            toggleFavorite({
              number: surahData.number,
              name: surahData.name,
              name_latin: surahData.name_latin,
              translation_name: surahData.translations.id.name,
              timestamp: String(new Date().getTime()),
            })
          }
        />
      </div>
      <Pagination currentSurah={String(id)} listSurah={surahList} />
      <ContainerListView surahData={surahData} />
      <Pagination currentSurah={String(id)} listSurah={surahList} />
      <BackToTopContainer />
    </div>
  );
};

export default PageClient;
