import { useState, useEffect } from "react";
import { FavoriteSurah as FavoriteSurahState } from "@/types/favorite";
import {
  getFavorite as getFavoriteStorage,
  setFavorite as setFavoriteStorage,
} from "@/lib/storage";
import { toast } from "@/store/toastStore";

const MAX_FAVORITE_SURAH = 3;

export const useFavoriteSurah = () => {
  const [favorites, setFavorites] = useState<FavoriteSurahState[]>([]);

  useEffect(() => {
    const stored = getFavoriteStorage();
    if (stored) {
      setFavorites(stored);
    }
  }, []);

  const toggleFavorite = (surah: FavoriteSurahState) => {
    const isFavoriteSurah = favorites.some((item) => item.number === surah.number);

    if (favorites.length === MAX_FAVORITE_SURAH && !isFavoriteSurah) {
      toast({
        message: `Maksimal hanya boleh ${MAX_FAVORITE_SURAH} Surah favorit.`,
        type: "error",
      });

      return;
    }

    setFavorites((prev) => {
      const updatedStore = isFavoriteSurah
        ? prev.filter((item) => item.number !== surah.number)
        : [...prev, surah];
      setFavoriteStorage(updatedStore);
      return updatedStore;
    });

    toast({
      message: `Berhasil ${isFavoriteSurah ? "hapus" : "tambah"} Surah ${surah.name_latin} sebagai favorit.`,
      type: "info",
    });
  };

  const isFavorite = (surahNumber: string): boolean => {
    return favorites.some((item) => item.number === surahNumber);
  };

  return { isFavorite, toggleFavorite, favorites };
};
