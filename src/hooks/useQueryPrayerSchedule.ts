import { useQuery } from "@tanstack/react-query";
import { PrayerScheduleResponse } from "@/types/prayerSchedule";
import { fetchPrayerSchedule } from "@/lib/api/fetchPrayerSchedule";

export const useQueryPrayerSchedule = () => {
  return useQuery<PrayerScheduleResponse>({
    queryKey: ["prayer-schedule", "2025-06"],
    queryFn: fetchPrayerSchedule,
    staleTime: 1000 * 60 * 60 * 24, // 1 Day
  });
};
