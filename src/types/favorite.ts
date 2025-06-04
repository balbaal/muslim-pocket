import { SurahItem } from "./surah";

export type FavoriteSurah = Pick<SurahItem, "name" | "name_latin" | "number"> & {
  translation_name: string;
  timestamp: string;
};
