import React from "react";
import features from "@/data/features";
import CheckpointCard from "@/views/CheckpointCard";
import Link from "next/link";
import ButtonPlayAyat from "@/views/ButtonPlayAyat";

const Home = () => {
  return (
    <main className="px-4 pt-4 flex flex-col gap-6 w-full">
      <section>
        <h2 className="font-bold text-lg flex items-center gap-2 text-black mb-4">
          <span>📌</span>
          Surah Terakhir Dibaca
        </h2>
        <CheckpointCard />
      </section>
      <section>
        <h2 className="font-bold text-lg flex items-center gap-2 text-black mb-4">
          <span>🎶</span>
          Kutipan Ayat
        </h2>
        <div className="flex flex-col gap-2 shadow rounded-lg p-4 bg-gray-100 text-black">
          <div className="flex flex-col gap-2">
            <p className="text-right text-2xl">
              وَاسْتَعِيْنُوْا بِالصَّبْرِ وَالصَّلٰوةِ ۗ وَاِنَّهَا لَكَبِيْرَةٌ اِلَّا عَلَى
              الْخٰشِعِيْنَۙ
            </p>
            <p className="italic text-sm">
              &quot;Dan mohonlah pertolongan (kepada Allah) dengan sabar dan salat. Dan (salat) itu
              sungguh berat, kecuali bagi orang-orang yang khusyuk,&quot;
            </p>
          </div>
          <div className="flex justify-end">
            <ButtonPlayAyat />
          </div>
        </div>
      </section>
      <section>
        <h2 className="font-bold text-lg flex items-center gap-2 text-black mb-4">
          <span>🚀</span>
          Fitur Muslim-Pocket.com
        </h2>
        <div className="grid grid-cols-2 gap-2">
          {features.map((feature) => (
            <Link
              href={feature.link}
              key={feature.id}
              className="bg-gray-100 shadow rounded-lg p-4"
            >
              <p className="flex gap-2 text-black items-center">
                {feature.icon} <span>{feature.title}</span>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
