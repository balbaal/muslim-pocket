import { SurahItem } from "./surah";

export type SurahCheckPoint = Pick<SurahItem, "name" | "name_latin" | "number"> & {
  ayah_number: string;
  timestamp: string;
};
