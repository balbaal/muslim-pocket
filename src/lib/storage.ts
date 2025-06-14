import { SurahCheckPoint } from "@/types/checkpoint";
import { FavoriteSurah } from "@/types/favorite";
import { DailyPrayerData } from "@/types/prayerSchedule";

const CHECKPOINT_STORAGE_NAME: string = "last-read-surah";
const FAVORITE_STORAGE_NAME: string = "favorite-surah";
const THEME_STORAGE_NAME: string = "theme";
const PRAYER_STORAGE_NAME: string = "prayer-schedule";

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

/**
 * THEME COLOR
 */
export const setTheme = (value: string) => {
  localStorage.setItem(THEME_STORAGE_NAME, value);
};

export const getTheme = (): string => {
  const theme = localStorage.getItem(THEME_STORAGE_NAME);
  return theme || "light";
};

/**
 * PRAYER SCHEDULE
 */

export const setPrayerSchedule = (prayer: DailyPrayerData[]) => {
  localStorage.setItem(PRAYER_STORAGE_NAME, JSON.stringify(prayer));
};

export const getPrayerSchedule = (): DailyPrayerData[] => {
  const prayer = localStorage.getItem(PRAYER_STORAGE_NAME);

  return prayer ? JSON.parse(prayer) : [];
};
