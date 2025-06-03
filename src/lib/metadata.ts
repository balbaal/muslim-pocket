type Pages = "home" | "about" | "prayerSchedule" | "allSurah";

type metadataType = Record<
  Pages,
  {
    title: string;
    description: string;
  }
>;

export const metadataMap: metadataType = {
  home: {
    title: "Muslim Pocket - Al-Qur’an Digital & Jadwal Sholat Harian",
    description:
      "Baca Al-Qur’an digital dengan teks Arab, latin, dan terjemahan. Dilengkapi jadwal sholat harian dan tampilan yang nyaman dibaca.",
  },
  about: {
    title: "Tentang Aplikasi Muslim Pocket - Al-Qur’an Digital Gratis",
    description:
      "Muslim Pocket adalah proyek Al-Qur’an digital gratis untuk semua umat Muslim. Dibuat dengan cinta, ringan, dan mudah digunakan.",
  },
  prayerSchedule: {
    title: "Jadwal Sholat Hari Ini di Lokasimu - Muslim Pocket",
    description:
      "Lihat waktu sholat harian sesuai lokasi kamu. Akurat dan selalu diperbarui: Subuh, Dzuhur, Ashar, Maghrib, dan Isya.",
  },
  allSurah: {
    title: "Daftar Surah Al-Qur’an Lengkap - Muslim Pocket",
    description:
      "Temukan semua surah dalam Al-Qur’an, lengkap dengan nama, arti, jumlah ayat, dan susunan sesuai mushaf.",
  },
  /**
   * Detail surah set directly on Page
   * Cause need consume Dynamic data
   */
};
