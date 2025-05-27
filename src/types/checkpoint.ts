import { SurahItem } from "./surah";

export const CHECKPOINT_STORAGE_NAME: string = "last-read-surah";

export type SurahCheckPoint = Pick<SurahItem, "name" | "name_latin" | "number"> & {
  ayah_number: string;
  timestamp: string;
};
