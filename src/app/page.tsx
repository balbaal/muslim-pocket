"use client";

import Image from "next/image";
import PlayIcon from "@/assets/icons/play.svg";

const Home = () => {
  const handleClickPlayAyah = () => {
    alert("Play !!!");
  };

  return (
    <div className="px-4 pt-12">
      <div className="flex flex-col gap-4 text-blue-950 max-w-[300px] mx-auto text-center">
        <h1 className="text-5xl font-medium">Qur&lsquo;an Online</h1>
        <p>Without ads, simple & enjoy the Qur&apos;an anywhere, anytime</p>
        <button className="cursor-pointer bg-blue-950 px-4 py-3 text-white rounded-md font-semibold">
          Explore Surah
        </button>
      </div>
      <hr className="mt-14 mb-10 -mx-4 " />
      <div className="text-blue-950">
        <h3 className="font-semibold text-xl mb-8">Ayah of the Day</h3>
        <div className="flex flex-col gap-2">
          <p className="text-right text-3xl">
            اٰمَنُوْا قُوْٓا اَنْفُسَكُمْ وَاَهْلِيْكُمْ نَارًا وَّقُوْدُهَا النَّاسُ وَالْحِجَارَةُ
            عَلَيْهَا مَلٰۤىِٕكَةٌ
          </p>
          <p className="italic">
            &quot;Wahai Nabi! Mengapa engkau mengharamkan apa yang dihalalkan Allah bagimu? Engkau
            ingin menyenangkan hati istri-istrimu? Dan Allah Maha Pengampun, Maha Penyayang.&quot;
          </p>
        </div>
        <div className="flex justify-end mt-10">
          <button
            onClick={handleClickPlayAyah}
            className="cursor-pointer p-3 bg-gray-300 rounded-full"
          >
            <Image alt="play-icon" src={PlayIcon} height={16} width={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
