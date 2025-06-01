export type PrayerTimings = {
  Fajr: string;
  Sunrise: string;
  Dhuhr: string;
  Asr: string;
  Sunset: string;
  Maghrib: string;
  Isha: string;
  Imsak: string;
  Midnight: string;
  Firstthird: string;
  Lastthird: string;
};

export type HijriDate = {
  date: string;
  format: string;
  day: string;
  weekday: { en: string; ar: string };
  month: { number: number; en: string; ar: string; days: number };
  year: string;
  designation: { abbreviated: string; expanded: string };
  holidays: unknown[];
  adjustedHolidays: string[];
  method: string;
};

export type GregorianDate = {
  date: string;
  format: string;
  day: string;
  weekday: { en: string };
  month: { number: number; en: string };
  year: string;
  designation: { abbreviated: string; expanded: string };
  lunarSighting: boolean;
};

export type Meta = {
  latitude: number;
  longitude: number;
  timezone: string;
  method: {
    id: number;
    name: string;
    params: { Fajr: number; Isha: number };
    location: { latitude: number; longitude: number };
  };
  latitudeAdjustmentMethod: string;
  midnightMode: string;
  school: string;
  offset: Record<string, number>;
};

export type DailyPrayerData = {
  timings: PrayerTimings;
  meta: Meta;
  date: {
    readable: string;
    timestamp: string;
    hijri: HijriDate;
    gregorian: GregorianDate;
  };
};

export type PrayerScheduleResponse = {
  code: number;
  status: string;
  data: DailyPrayerData[];
};
