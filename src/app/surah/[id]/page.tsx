"use client";

import Stepper from "@/components/Stepper";
import SurahCard from "@/components/SurahCard";
import generateStepper from "@/lib/generateStepper";
import { useParams, useRouter } from "next/navigation";
import { SurahItem } from "@/types/surah";
import { surahRevelation } from "@/data/surah-revelation";
import Pagination from "@/components/Pagination";
import { surahList } from "@/data/surah-list";
import BackToTopContainer from "@/components/backToTop/BackToTopContainer";
import ContainerListView from "./ContainerListView";
import { useEffect, useState } from "react";

const SurahDetail = () => {
  const [surahData, setSurahData] = useState<SurahItem | null>(null);
  const params = useParams<{ id: string }>();
  const router = useRouter();

  const getSurahData = async (): Promise<void> => {
    try {
      const surah = await import(`@/data/surah/${params.id}.ts`);
      setSurahData(surah.default);
    } catch {
      router.push("/not-found");
    }
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
    <main className="p-4 flex flex-col gap-6 w-full">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          📖 <span>Baca per Surat</span>
        </h1>
        <Stepper steps={generateStepper(`/surah/${params.id}`)} />
        <SurahCard
          number={surahData.number}
          name={surahData.name}
          name_latin={surahData.name_latin}
          translation_name={surahData.translations.id.name}
          number_of_ayah={surahData.number_of_ayah}
          revelation_type={surahRevelation[params.id]}
        />
      </section>
      <Pagination currentSurah={params.id} listSurah={surahList} />
      <ContainerListView surahData={surahData} />
      <Pagination currentSurah={params.id} listSurah={surahList} />
      <BackToTopContainer />
    </main>
  );
};

export default SurahDetail;
