import { create } from "zustand";

export interface Prayer {
  name: string;
  time: string;
  timestamps: string;
}

export interface PrayerDate {
  weekday: string;
  readableDate: string;
  date: {
    day: number;
    month: number;
    year: number;
  };
  timestamps: string;
  prayerTime: Prayer[];
}

interface PrayerState {
  timeZone: string;
  prayerSchedule: PrayerDate[];
  nextPrayer: Prayer | null;
  isLoadingPrayer: boolean;
  setPrayerSchedule: (data: PrayerDate[]) => void;
  setNextPrayer: (prayer: Prayer) => void;
  setTimeZone: (timeZone: string) => void;
  setIsloadingPrayer: (isLoadingPrayer: boolean) => void;
}

export const usePrayerStore = create<PrayerState>((set) => ({
  timeZone: "",
  prayerSchedule: [],
  nextPrayer: null,
  isLoadingPrayer: true,
  setPrayerSchedule: (data) => set({ prayerSchedule: data }),
  setNextPrayer: (prayer) => set({ nextPrayer: prayer }),
  setTimeZone: (timeZone) => set({ timeZone }),
  setIsloadingPrayer: (isLoadingPrayer) => set({ isLoadingPrayer }),
}));
