"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Input from "@/components/Input";
import Icon from "@/components/Icons";
import { surahList } from "@/data/surah-list";
import Breadcrumb from "@/components/Breadcrumb";
import generateBreadcrumb from "@/lib/generateBreadcrumb";
import { useCallback, useState } from "react";
import { SurahItemPreview } from "@/types/surah";
import { clearString } from "@/lib/transformString";
import { debounce } from "@/lib/utils";
import ListView from "./ListView";

const PageClient = () => {
  const [displayedSurahs, setDisplayedSurahs] = useState<SurahItemPreview[]>(surahList);
  const pathname = usePathname();

  const handleSearch = useCallback((search: string) => {
    const newFilteredList = surahList.filter(
      (surah) =>
        clearString(surah.name_latin).toLowerCase().includes(clearString(search).toLowerCase()) ||
        clearString(surah.translation_name)
          .toLowerCase()
          .includes(clearString(search).toLowerCase())
    );
    setDisplayedSurahs(newFilteredList);
  }, []);

  const debouncedSearch = debounce(handleSearch, 500);

  const onHandleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4">
        <Breadcrumb breadcrumb={generateBreadcrumb(pathname)} />
        <Input
          type="text"
          prefix={<Icon name="search-outline" className="text-black dark:text-white" size={20} />}
          placeholder="Cari surah apa ?"
          onChange={onHandleSearch}
        />
      </div>
      <div className="flex flex-col gap-2">
        <ListView surahList={displayedSurahs} />
      </div>
    </div>
  );
};

export default PageClient;
