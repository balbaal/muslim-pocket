"use client";

import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Icon from "@/components/Icons";
import SurahCard from "@/components/SurahCard";
import { surahList } from "@/data/surah-list";
import Stepper from "@/components/Stepper";
import generateStepper from "@/lib/generateStepper";
import { surahRevelation } from "@/data/surah-revelation";
import { useState } from "react";
import { SurahList as SurahListType } from "@/types/surah";
import { clearString } from "@/lib/transformString";

const SurahList = () => {
  const [surahListFiltered, setSurahListFiltered] = useState<SurahListType>(surahList);
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
    <div className="px-4 py-4 flex flex-col gap-6">
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
        {surahListFiltered?.length > 0 ? (
          surahListFiltered.map((surah) => (
            <SurahCard
              key={surah.number}
              number={surah.number}
              name={surah.name}
              name_latin={surah.name_latin}
              translation_name={surah.translation_name}
              number_of_ayah={surah.number_of_ayah}
              revelation_type={surahRevelation[surah.number]}
            />
          ))
        ) : (
          <p className="text-center text-gray-400">Tidak ada surat yang ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default SurahList;
