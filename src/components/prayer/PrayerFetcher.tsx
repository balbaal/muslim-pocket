"use client";

import { useQueryPrayerSchedule } from "@/hooks/useQueryPrayerSchedule";
import { PrayerDate, usePrayerStore } from "@/store/prayerStore";
import { PrayerScheduleResponse } from "@/types/prayerSchedule";
import { useEffect } from "react";

const PrayerFetcher = () => {
  const { data, isLoading, error } = useQueryPrayerSchedule();
  const setPrayerSchedule = usePrayerStore((state) => state.setPrayerSchedule);
  const setNextPrayer = usePrayerStore((state) => state.setNextPrayer);
  const setTimeZone = usePrayerStore((state) => state.setTimeZone);
  const setIsloadingPrayer = usePrayerStore((state) => state.setIsloadingPrayer);

  const handleNextPrayer = (result: PrayerDate[]): void => {
    const date = new Date();
    const currentDay = date.getDate();
    const prayerToday = result.find((item) => item.date.day === currentDay);
    const nextPrayer = prayerToday?.prayerTime.find(
      (item) => Number(item.timestamps) > date.getTime()
    );

    if (!!nextPrayer?.name) {
      setNextPrayer({
        name: nextPrayer.name,
        time: nextPrayer?.time,
        timestamps: nextPrayer.timestamps,
      });
    }
  };

  const mappingPrayerSchedule = (data: PrayerScheduleResponse["data"]) => {
    const allowedPrayerName = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const timeZone = data[0]?.meta?.timezone || "";
    const result = data.map(
      (z): PrayerDate => ({
        weekday: z.date.gregorian.weekday.en,
        date: {
          day: Number(z.date.gregorian.day),
          month: Number(z.date.gregorian.month.number),
          year: Number(z.date.gregorian.year),
        },
        readableDate: z.date.readable,
        timestamps: z.date.timestamp,
        prayerTime: Object.entries(z.timings)
          .filter(([key]) => allowedPrayerName.includes(key))
          .map(([key, val]) => {
            const time = val.split(" ")?.[0];
            const timeString = `${z.date.gregorian.year}-${String(z.date.gregorian.month.number).padStart(2, "0")}-${z.date.gregorian.day}T${time}:00`;

            return {
              name: key,
              time: time,
              timestamps: String(new Date(timeString).getTime()),
            };
          }),
      })
    );

    setTimeZone(timeZone);
    setPrayerSchedule(result);
    handleNextPrayer(result);
  };

  useEffect(() => {
    if (!isLoading && !error) {
      setIsloadingPrayer(true);
      mappingPrayerSchedule(data?.data || []);
      setIsloadingPrayer(false);
    }
  }, [isLoading]);

  return null;
};

export default PrayerFetcher;
