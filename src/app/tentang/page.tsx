import React from "react";
import { Metadata } from "next";
import { metadataMap } from "@/lib/metadata";

import Link from "next/link";
import { createOGMeta } from "@/lib/ogMeta";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: metadataMap.about.title,
  description: metadataMap.about.description,
  openGraph: createOGMeta({
    title: metadataMap.about.title,
    description: metadataMap.about.description,
    url: "https://muslimpocket.id/tentang",
    type: "website",
  }),
};

const About = () => {
  return (
    <main className="w-full p-4 flex flex-col gap-4">
      <h1 className="text-2xl font-bold text-black flex items-center gap-2">
        🍉 <span>Tentang Muslim Pocket</span>
      </h1>

      <article className="p-4 rounded-lg bg-gray-100 shadow flex flex-col gap-4">
        <p className="text-base text-black">
          <Link href="/">
            <strong>
              <u className="text-blue-700">Muslim Pocket</u>
            </strong>
          </Link>{" "}
          adalah bentuk kecil kontribusi saya untuk umat muslim — sebuah ruang sederhana yang saya
          bangun untuk membantu kita lebih mudah mengingat Allah, di mana pun dan kapan pun.
        </p>
        <p className="text-black">
          Saya percaya bahwa teknologi bisa menjadi jalan menuju kebaikan, dan semoga setiap fitur
          di dalamnya sekecil apa pun bisa menjadi manfaat yang terus mengalir.
        </p>
        <p className="text-black">Semoga Muslim Pocket ini bisa menjadi amal jariah, insyaAllah.</p>

        <section>
          <h2 className="text-base text-black font-bold">
            ✨ <span>Yang kami hadirkan:</span>
          </h2>
          <ul className="text-black text-base list-disc pl-9">
            <li>Al-Qur’an digital yang nyaman dibaca</li>
            <li>Waktu sholat harian yang akurat</li>
            <li>Desain ringan dan ramah perangkat mobile</li>
            <li>Dibuat untuk momen refleksi, kapan saja</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base text-black font-bold">
            📚 <span>Sumber Data:</span>
          </h2>
          <p className="text-black ml-5.5">
            Kami sangat berterima kasih kepada para kontributor dan komunitas yang telah membuka
            akses data Islami dengan bebas:
          </p>
          <ul className="text-black text-base list-disc pl-9">
            <li>
              <Link
                className="text-blue-700"
                href="https://github.com/rioastamal/quran-json"
                target="_blank"
              >
                rioastamal/quran-json
              </Link>{" "}
              oleh{" "}
              <Link
                className="text-blue-700"
                href="https://www.linkedin.com/in/rioastamal"
                target="_blank"
              >
                Rio Astamal
              </Link>{" "}
              — menyediakan data Al-Qur`an dalam format JSON.
            </li>
            <li>
              <Link
                className="text-blue-700"
                href="https://aladhan.com/prayer-times-api"
                target="_blank"
              >
                Aladhan API
              </Link>{" "}
              — API global untuk waktu sholat harian berdasarkan lokasi.
            </li>
            <li>
              Menggunakan <i>Geolocation API</i> dari browser untuk mendapatkan koordinat pengguna
              secara real-time.
            </li>
          </ul>
        </section>
        <p className="text-black">
          Muslim Pocket proyek terbuka yang dikembangkan dengan cinta dan keikhlasan. Kontribusi,
          kritik, atau bintang dari kamu sangat berarti. Lihat kode sumbernya di:{" "}
          <Link
            className="text-blue-700 underline"
            href="https://github.com/balbaal/muslim-pocket"
            target="_blank"
          >
            📦 Kode Sumber
          </Link>
        </p>
      </article>
    </main>
  );
};

export default About;
