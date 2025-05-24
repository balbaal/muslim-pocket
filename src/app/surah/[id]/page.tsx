"use client";

import Stepper from "@/components/Stepper";
import SurahCard from "@/components/SurahCard";
import generateStepper from "@/lib/generateStepper";
import { usePathname } from "next/navigation";
import ListView from "./ListView";

const SurahDetail = () => {
  const pathname = usePathname();

  return (
    <main className="p-4 flex flex-col gap-6">
      <section className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          📖 <span>Baca per Surat</span>
        </h1>
        <Stepper steps={generateStepper(pathname)} />
        <SurahCard
          number="1"
          name="الفاتحة"
          name_latin="Al-Fatihah"
          translation_name="Pembukaan"
          number_of_ayah={"7"}
          revelation_type="Madaniyah"
        />
      </section>
      <div>Pagination Top</div>
      <article className="flex flex-col gap-2">
        <ListView />
      </article>
      <div>Pagination Bottom</div>
    </main>
  );
};

export default SurahDetail;
