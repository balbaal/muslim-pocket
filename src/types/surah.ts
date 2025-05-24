export type SurahRevelation = "Makkiyah" | "Madaniyah";

interface AyatText {
  [ayatNumber: string]: string;
}

interface AyatTranslation {
  [languageCode: string]: {
    name: string;
    text: AyatText;
  };
}

interface AyatTafsir {
  [languageCode: string]: {
    [ministryCode: string]: {
      name: string;
      source: string;
      text: AyatText;
    };
  };
}

export interface SurahItem {
  number: string;
  name: string;
  name_latin: string;
  number_of_ayah: string;
  text: AyatText;
  translations: AyatTranslation;
  tafsir: AyatTafsir;
}

export type SurahItemPreview = Pick<
  SurahItem,
  "number" | "name" | "name_latin" | "number_of_ayah"
> & {
  translation_name: string;
};
