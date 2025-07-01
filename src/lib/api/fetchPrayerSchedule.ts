import axios from "axios";
import { getCurrentLatLng } from "../utils";

export const fetchPrayerSchedule = async () => {
  const position = await getCurrentLatLng();
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const result = await axios.get(
    `https://api.aladhan.com/v1/calendar/${currentYear}/${currentMonth}?latitude=${position.lat}&longitude=${position.lng}&method=20&shafaq=general`
  );

  return result.data;
};
