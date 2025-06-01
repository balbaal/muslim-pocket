import axios from "axios";
import { getCurrentLatLng } from "../utils";

export const fetchPrayerSchedule = async () => {
  const position = await getCurrentLatLng();

  const result = await axios.get(
    `https://api.aladhan.com/v1/calendar/2025/6?latitude=${position.lat}&longitude=${position.lng}&method=20&shafaq=general`
  );

  return result.data;
};
