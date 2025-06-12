export type PrayerNameType = "Fajr" | "Dhuhr" | "Asr" | "Maghrib" | "Isha";
export type PrayerNameIndonesiaType = "Subuh" | "Dzuhur" | "Ashar" | "Maghrib" | "Isya";

export const prayerNameAllowed: PrayerNameType[] = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
export const mappingPrayerNameIndonesia: Record<PrayerNameType, PrayerNameIndonesiaType> = {
  Fajr: "Subuh",
  Dhuhr: "Dzuhur",
  Asr: "Ashar",
  Maghrib: "Maghrib",
  Isha: "Isya",
};
