"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useQueryPrayerSchedule } from "@/hooks/useQueryPrayerSchedule";
import { PrayerDate, usePrayerStore } from "@/store/prayerStore";
import { PrayerScheduleResponse } from "@/types/prayerSchedule";
import {
  getPrayerSchedule as getPrayerScheduleStorage,
  setPrayerSchedule as setPrayerScheduleStorage,
} from "@/lib/storage";

const PrayerFetcher = () => {
  const { refetch } = useQueryPrayerSchedule();
  const prayerScheduleState = usePrayerStore((state) => state.prayerSchedule);
  const setPrayerSchedule = usePrayerStore((state) => state.setPrayerSchedule);
  const setNextPrayer = usePrayerStore((state) => state.setNextPrayer);
  const setTimeZone = usePrayerStore((state) => state.setTimeZone);
  const setIsloadingPrayer = usePrayerStore((state) => state.setIsloadingPrayer);

  const pathname = usePathname();

  const handleNextPrayer = (result: PrayerDate[]): void => {
    const date = new Date();
    const currentDay = date.getDate();
    const prayerToday = result.find((item) => item.date.day === currentDay);
    const nextPrayer = prayerToday?.prayerTime.find(
      (item) => Number(item.timestamps) > date.getTime()
    );

    if (nextPrayer?.name) {
      setNextPrayer({
        name: nextPrayer.name,
        time: nextPrayer.time,
        timestamps: nextPrayer.timestamps,
      });
    } else {
      // If no next prayer found today (after Isha), get tomorrow's Fajr
      const tomorrowDay = date.getDate() + 1;
      const prayerTomorrow = result.find((item) => item.date.day === tomorrowDay);
      const fajrTomorrow = prayerTomorrow?.prayerTime.find((item) => item.name === "Fajr");

      if (fajrTomorrow) {
        setNextPrayer({
          name: fajrTomorrow.name,
          time: fajrTomorrow.time,
          timestamps: fajrTomorrow.timestamps,
        });
      }
    }
  };

  const mappingPrayerSchedule = (data: PrayerScheduleResponse["data"]) => {
    const allowedPrayerName = ["Fajr", "Dhuhr", "Asr", "Maghrib", "Isha"];
    const mappingNameIndonesia: Record<string, string> = {
      Fajr: "Subuh",
      Dhuhr: "Dzuhur",
      Asr: "Ashar",
      Maghrib: "Maghrib",
      Isha: "Isya",
    };

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
              name: mappingNameIndonesia[key] || "-",
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

  const handleTriggerRefetch = async () => {
    const { data } = await refetch();
    const prayerData = data?.data || [];

    mappingPrayerSchedule(prayerData);
    if (prayerData?.length > 0) {
      setPrayerScheduleStorage(prayerData);
    }
  };

  useEffect(() => {
    const prayerSchedule = getPrayerScheduleStorage();
    const storagePrayerMonth = prayerSchedule?.[0]?.date?.gregorian?.month?.number;
    const currentMonth = new Date().getMonth() + 1;

    const isSameMonth = storagePrayerMonth === currentMonth;

    if (prayerSchedule?.length > 0 && prayerScheduleState?.length > 0 && isSameMonth) return;

    setIsloadingPrayer(true);

    if (prayerSchedule?.length > 0 && isSameMonth) {
      mappingPrayerSchedule(prayerSchedule);
      setIsloadingPrayer(false);
      return;
    }

    if (pathname === "/jadwal-sholat") {
      handleTriggerRefetch();
    }

    setIsloadingPrayer(false);
  });

  return null;
};

export default PrayerFetcher;
