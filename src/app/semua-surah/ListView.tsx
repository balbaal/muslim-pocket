import React from "react";
import { SurahItemPreview } from "@/types/surah";
import SurahCard from "@/components/SurahCard";
import { surahRevelation } from "@/data/surah-revelation";
import { useFavoriteSurah } from "@/hooks/useFavoriteSurah";

const ListView = ({
  surahList,
  isSearching,
}: {
  surahList: SurahItemPreview[];
  isSearching: boolean;
}) => {
  const { isFavorite, toggleFavorite } = useFavoriteSurah();

  if (surahList.length === 0 && isSearching) {
    return <p className="text-center text-gray-400">Tidak ada surah yang ditemukan.</p>;
  }

  return surahList.map((surah) => (
    <article key={surah.number}>
      <SurahCard
        number={surah.number}
        name={surah.name}
        name_latin={surah.name_latin}
        translation_name={surah.translation_name}
        number_of_ayah={surah.number_of_ayah}
        revelation_type={surahRevelation[surah.number]}
        isFavorite={isFavorite(surah.number)}
        handleToggleFavorite={(event: React.MouseEvent) => {
          event.preventDefault();
          toggleFavorite({
            number: surah.number,
            name: surah.name,
            name_latin: surah.name_latin,
            translation_name: surah.translation_name,
            timestamp: String(new Date().getTime()),
          });
        }}
      />
    </article>
  ));
};

export default ListView;
