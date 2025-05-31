import { create } from "zustand";

interface Prayer {
  name: string;
  time: string;
}

interface PrayerDate {
  date: string;
  prayerTime: Prayer[];
}

interface PrayerState {
  prayerSchedule: PrayerDate[];
  nextPrayer: Prayer | null;
  setPrayerSchedule: (data: PrayerDate[]) => void;
  setNextPrayer: (prayer: Prayer) => void;
}

const PRAY_SCHEDULE_DUMMY: PrayerDate[] = [
  {
    date: "01-05-2025",
    prayerTime: [
      { name: "Subuh", time: "05:01" },
      { name: "Dzuhur", time: "12:04" },
      { name: "Ashar", time: "15:11" },
      { name: "Magrib", time: "17:58" },
      { name: "Isya", time: "19:32" },
    ],
  },
  {
    date: "02-05-2025",
    prayerTime: [
      { name: "Subuh", time: "05:01" },
      { name: "Dzuhur", time: "12:04" },
      { name: "Ashar", time: "15:11" },
      { name: "Magrib", time: "17:58" },
      { name: "Isya", time: "19:32" },
    ],
  },
  {
    date: "03-05-2025",
    prayerTime: [
      { name: "Subuh", time: "05:01" },
      { name: "Dzuhur", time: "12:04" },
      { name: "Ashar", time: "15:11" },
      { name: "Magrib", time: "17:58" },
      { name: "Isya", time: "19:32" },
    ],
  },
  {
    date: "04-05-2025",
    prayerTime: [
      { name: "Subuh", time: "05:01" },
      { name: "Dzuhur", time: "12:04" },
      { name: "Ashar", time: "15:11" },
      { name: "Magrib", time: "17:58" },
      { name: "Isya", time: "19:32" },
    ],
  },
];

export const usePrayerStore = create<PrayerState>((set) => ({
  prayerSchedule: PRAY_SCHEDULE_DUMMY,
  nextPrayer: { name: "Dzuhur", time: "12:08" },
  setPrayerSchedule: (data) => set({ prayerSchedule: data }),
  setNextPrayer: (prayer) => set({ nextPrayer: prayer }),
}));
