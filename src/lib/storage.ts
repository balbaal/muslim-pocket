import { SurahCheckPoint } from "@/types/checkpoint";
import { FavoriteSurah } from "@/types/favorite";

const CHECKPOINT_STORAGE_NAME: string = "last-read-surah";
const FAVORITE_STORAGE_NAME: string = "favorite-surah";

/**
 * CHECKPOINT VERSE / AYAT
 */
export const setCheckpoint = (checkpointData: SurahCheckPoint) => {
  localStorage.setItem(CHECKPOINT_STORAGE_NAME, JSON.stringify(checkpointData));
};

export const getCheckpoint = (): SurahCheckPoint | null => {
  const checkpoint = localStorage.getItem(CHECKPOINT_STORAGE_NAME);
  return checkpoint ? JSON.parse(checkpoint) : null;
};

/**
 * VAFORITE SURAH
 */
export const setFavorite = (favoriteData: FavoriteSurah[]) => {
  localStorage.setItem(FAVORITE_STORAGE_NAME, JSON.stringify(favoriteData));
};

export const getFavorite = (): FavoriteSurah[] => {
  const favoriteList = localStorage.getItem(FAVORITE_STORAGE_NAME);
  return favoriteList ? JSON.parse(favoriteList) : [];
};
