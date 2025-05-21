export type SurahItem = {
  number: string;
  name: string;
  name_latin: string;
  translation_name: string;
  number_of_ayah: string;
};

export type SurahList = SurahItem[];

export interface Surah {
  number: number;
  name: string;
  englishName: string;
  englishNameTranslation: string;
  numberOfAyahs: number;
  revelationType: string;
}
