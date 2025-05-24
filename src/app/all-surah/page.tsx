"use client";

import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Icon from "@/components/Icons";
import { surahList } from "@/data/surah-list";
import Stepper from "@/components/Stepper";
import generateStepper from "@/lib/generateStepper";
import { useState } from "react";
import { SurahItemPreview } from "@/types/surah";
import { clearString } from "@/lib/transformString";
import ListView from "./ListView";

const SurahList = () => {
  const [surahListFiltered, setSurahListFiltered] = useState<SurahItemPreview[]>(surahList);
  const pathname = usePathname();

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value;
    const filteredSurahList = surahList.filter(
      (surah) =>
        clearString(surah.name_latin).toLowerCase().includes(clearString(search).toLowerCase()) ||
        clearString(surah.translation_name)
          .toLowerCase()
          .includes(clearString(search).toLowerCase())
    );
    setSurahListFiltered(filteredSurahList);
  };

  return (
    <main className="p-4 flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold text-black flex items-center gap-2">
          📖 <span>Semua Surat</span>
        </h1>
        <Stepper steps={generateStepper(pathname)} />
        <Input
          type="text"
          prefix={<Icon name="search-outline" className="text-black" size={20} />}
          placeholder="Cari surat apa ?"
          onChange={onHandleSearch}
        />
      </div>
      <div className="flex flex-col gap-2">
        <ListView surahList={surahListFiltered} />
      </div>
    </main>
  );
};

export default SurahList;
