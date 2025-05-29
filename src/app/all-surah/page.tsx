"use client";

import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Icon from "@/components/Icons";
import { surahList } from "@/data/surah-list";
import Stepper from "@/components/Stepper";
import generateStepper from "@/lib/generateStepper";
import { useCallback, useState, useEffect } from "react";
import { SurahItemPreview } from "@/types/surah";
import { clearString } from "@/lib/transformString";
import { debounce } from "@/lib/utils";
import ListView from "./ListView";
import { useInView } from "react-intersection-observer";

const ITEMS_PER_PAGE = 5;

const SurahList = () => {
  const [filteredSurahs, setFilteredSurahs] = useState<SurahItemPreview[]>(surahList);
  const [displayedSurahs, setDisplayedSurahs] = useState<SurahItemPreview[]>([]);
  const [search, setSearch] = useState<string>("");

  const pathname = usePathname();

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "100px",
  });

  useEffect(() => {
    if (inView) {
      const nextItems = filteredSurahs.slice(
        displayedSurahs.length,
        displayedSurahs.length + ITEMS_PER_PAGE
      );
      if (nextItems.length > 0) {
        setDisplayedSurahs((prev) => [...prev, ...nextItems]);
      }
    }
  }, [inView, filteredSurahs, displayedSurahs.length]);

  const handleSearch = useCallback((search: string) => {
    const newFilteredList = surahList.filter(
      (surah) =>
        clearString(surah.name_latin).toLowerCase().includes(clearString(search).toLowerCase()) ||
        clearString(surah.translation_name)
          .toLowerCase()
          .includes(clearString(search).toLowerCase())
    );
    setSearch(search);
    setFilteredSurahs(newFilteredList);
    setDisplayedSurahs(newFilteredList.slice(0, ITEMS_PER_PAGE));
  }, []);

  const debouncedSearch = debounce(handleSearch, 500);

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  const hasMore = displayedSurahs.length < filteredSurahs.length;

  return (
    <main className="p-4 flex flex-col gap-6 w-full">
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
        <ListView surahList={displayedSurahs} isSearching={!!search} />
        {hasMore && (
          <div ref={ref} className="py-4 text-center">
            <p className="text-gray-500">Loading more surat...</p>
          </div>
        )}
      </div>
    </main>
  );
};

export default SurahList;
