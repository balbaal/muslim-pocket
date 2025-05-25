import Stepper from "@/components/Stepper";
import SurahCard from "@/components/SurahCard";
import generateStepper from "@/lib/generateStepper";
import { notFound } from "next/navigation";
import ListView from "./ListView";
import { SurahItem } from "@/types/surah";
import { surahRevelation } from "@/data/surah-revelation";
import Pagination from "@/components/Pagination";
import { surahList } from "@/data/surah-list";

async function getSurahData(id: string): Promise<SurahItem> {
  try {
    const surah = await import(`@/data/surah/${id}.ts`);
    return surah.default;
  } catch {
    notFound();
  }
}

type SurahDetailProps = { params: { id: string } };

const SurahDetail = async ({ params }: SurahDetailProps) => {
  const { id } = await params;
  const surahData = await getSurahData(id);

  return (
    <main className="p-4 flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          📖 <span>Baca per Surat</span>
        </h1>
        <Stepper steps={generateStepper(`/surah/${id}`)} />
        <SurahCard
          number={surahData.number}
          name={surahData.name}
          name_latin={surahData.name_latin}
          translation_name={surahData.translations.id.name}
          number_of_ayah={surahData.number_of_ayah}
          revelation_type={surahRevelation[id]}
        />
      </section>
      <Pagination currentSurah={id} listSurah={surahList} />
      <article className="flex flex-col gap-2">
        <ListView surahData={surahData} />
      </article>
      <Pagination currentSurah={id} listSurah={surahList} />
    </main>
  );
};

export default SurahDetail;
