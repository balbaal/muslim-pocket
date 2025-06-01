import axios from "axios";

export const fetchPrayerSchedule = async () => {
  const result = await axios.get(
    "https://api.aladhan.com/v1/calendar/2025/6?latitude=-6.183717&longitude=106.830582&method=20&shafaq=general"
  );

  return result.data;
};
