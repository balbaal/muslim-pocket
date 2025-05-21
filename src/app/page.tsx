"use client";

import Icon from "@/components/Icons";
import features from "@/data/features";
import Link from "next/link";

const Home = () => {
  const handleClickPlayAyah = () => {
    alert("Play !!!");
  };

  return (
    <div className="px-4 pt-4 flex flex-col gap-6">
      <section>
        <h2 className="font-bold text-lg flex items-center gap-2 text-black mb-4">
          <span>🎶</span>
          Ayat Hari Ini
        </h2>
        <div className="flex flex-col gap-2 shadow rounded-lg p-4 bg-gray-100 text-black">
          <div className="flex flex-col gap-2">
            <p className="text-right text-3xl">
              اٰمَنُوْا قُوْٓا اَنْفُسَكُمْ وَاَهْلِيْكُمْ نَارًا وَّقُوْدُهَا النَّاسُ
              وَالْحِجَارَةُ عَلَيْهَا مَلٰۤىِٕكَةٌ
            </p>
            <p className="italic">
              &quot;Wahai Nabi! Mengapa engkau mengharamkan apa yang dihalalkan Allah bagimu? Engkau
              ingin menyenangkan hati istri-istrimu? Dan Allah Maha Pengampun, Maha Penyayang.&quot;
            </p>
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleClickPlayAyah}
              className="cursor-pointer p-3 bg-white shadow rounded-full"
              aria-label="button-play"
            >
              <Icon name="play" className="text-black" />
            </button>
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
    </div>
  );
};

export default Home;
