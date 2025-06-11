import { useQuery } from "@tanstack/react-query";
import { PrayerScheduleResponse } from "@/types/prayerSchedule";
import { fetchPrayerSchedule } from "@/lib/api/fetchPrayerSchedule";

export const useQueryPrayerSchedule = () => {
  return useQuery<PrayerScheduleResponse>({
    queryKey: ["prayer-schedule"],
    queryFn: fetchPrayerSchedule,
    staleTime: 1000 * 60 * 60 * 24, // prevent refetch data: duration 1 day
    enabled: false, // don't running on first mount
  });
};
